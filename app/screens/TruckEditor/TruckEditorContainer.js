import {
    compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
    withPropsOnChange,
  } from 'recompose';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { Keyboard, ToastAndroid } from 'react-native';
  import TruckEditor from './TruckEditorScreenView';
  import { getParam } from '../../utils/navHelpers';
  import { firestoreConnect } from 'react-redux-firebase'
  /*-- IMPORT SCREENS --*/
  
  const screenProp = (propCarrierNo, def) => R.pathOr(def, ['truck', propCarrierNo]); 
  const requiredProps = ['carrierNo', 'capacity', 'unit',/*-- ADD PROPS --*/];
  const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));
  
  const enhance = compose(
    firestoreConnect(),    
    connect((state, props) => ({
      auth: state.firebase.auth,
      profile: state.firebase.profile
    })),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
    withProps(({ navigation }) => ({ listUrl: getParam('listUrl')(navigation) })),
    withProps(({ navigation }) => ({ truck: getParam('truck')(navigation) })),
   
    withState('carrierNo', 'setCarrierNo', screenProp('carrierNo', '')),
    /*-- ADD STATE PROPS --*/
		withState('unit', 'setUnit', screenProp('unit', '')),
		withState('capacity', 'setCapacity', screenProp('capacity', '')),

    /*-- ADD NAV PROPS --*/
    withProps(({/*-- FETCH PROPS --*/}) => ({
      /*-- ADD LOOKUP PROPS --*/
    })),    
    withHandlers({
    
      onSubmit: ({
        navigation, firestore, auth, profile, listUrl, truck, onClose, ...props
      }) => () => {
        Keyboard.dismiss();
        const editedProps = R.pick(['carrierNo', 'capacity', 'unit',/*-- ADD PROPS --*/], props);
        const propsToSubmit = truck ? Object.assign(truck, editedProps) : editedProps;
        let promise = {};
        if( truck) {
          Object.assign(propsToSubmit, {
            updatedByUser: auth.uid,
            updatedByTenantId: profile.tenantId,
            updatedDate: new Date()
          });
          promise = firestore.set('tenants/'+ profile.tenantId +'/trucks/' + truck.id, propsToSubmit)
        } else {
          Object.assign(propsToSubmit, {
            createdByUser: auth.uid,
            createdByTenantId: profile.tenantId,
            createdDate: new Date()
          });
          promise = firestore.add('tenants/' + profile.tenantId + '/trucks', propsToSubmit)
        }

        promise.then(() => {
          ToastAndroid.show('Truck has been saved successfully!', ToastAndroid.BOTTOM);
        }, (e) => {
          ToastAndroid.show('Error saving truck! Please try again', ToastAndroid.BOTTOM);
        });
        if(listUrl) {
          navigation.navigate(listUrl);
        } else {
          navigation.goBack(null);
        }
      },
      /*-- ADD SELECT PROPS --*/
      onSelectUnit: ({ setUnit }) => (val) => {
        setUnit(val);
      },
    
      /*-- ADD FORMINPUT HANDLER --*/
    }),
    withPropsOnChange(
      requiredProps,
      props => ({ isValid: !!props.carrierNo && props.carrierNo.length > 0 && isFieldsFilled(requiredProps, props) }),
    ),    
    lifecycle({
      componentDidMount() {
        const {
          truck,
          setCarrierNo,
          /*-- SET FORMINPUT VALUE --*/
        } = this.props;

        if(truck) {
          const { carrierNo, /*-- FETCH PROPS --*/ } = truck;
          setCarrierNo(carrierNo);
          /*-- SET PROPS --*/
        }
      },
      componentDidUpdate(prevProps) {
        const {
          /*-- SET FORMINPUT UPDATED VALUE --*/
        } = this.props;
        const {
          /*-- FETCH PREV FORMINPUT VALUE --*/
        } = prevProps;
        
        /*-- SET UPDATED VALUES --*/
      },
    }),
  );
  
  
  export default hoistStatics(enhance)(TruckEditor);
  