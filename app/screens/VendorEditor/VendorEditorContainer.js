import {
    compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
    withPropsOnChange,
  } from 'recompose';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { Keyboard, ToastAndroid } from 'react-native';
  import VendorEditor from './VendorEditorScreenView';
  import { getParam } from '../../utils/navHelpers';
  import { firestoreConnect } from 'react-redux-firebase'
  /*-- IMPORT SCREENS --*/
  
  const screenProp = (propName, def) => R.pathOr(def, ['vendor', propName]); 
  const requiredProps = ['name', 'phone',, 'gst',/*-- ADD PROPS --*/];
  const isFieldsFilled = R.pipe(R.props, R.none(R.isEmpty));
  
  const enhance = compose(
    firestoreConnect(),    
    connect((state, props) => ({
      auth: state.firebase.auth,
      profile: state.firebase.profile
    })),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
    withProps(({ navigation }) => ({ listUrl: getParam('listUrl')(navigation) })),
    withProps(({ navigation }) => ({ vendor: getParam('vendor')(navigation) })),
   
    withState('name', 'setName', screenProp('name', '')),
    /*-- ADD STATE PROPS --*/
		withState('gst', 'setGst', screenProp('gst', '')),
		withState('account', 'setAccount', screenProp('account', '')),
		withState('email', 'setEmail', screenProp('email', '')),
		withState('address', 'setAddress', screenProp('address', '')),
		withState('phone', 'setPhone', screenProp('phone', '')),

    /*-- ADD NAV PROPS --*/
    withProps(({/*-- FETCH PROPS --*/}) => ({
      /*-- ADD LOOKUP PROPS --*/
    })),    
    withHandlers({
    
      onSubmit: ({
        navigation, firestore, auth, profile, listUrl, vendor, onClose, ...props
      }) => () => {
        Keyboard.dismiss();
        const editedProps = R.pick(['name', 'phone', 'address', 'email', 'account', 'gst',/*-- ADD PROPS --*/], props);
        const propsToSubmit = vendor ? Object.assign(vendor, editedProps) : editedProps;
        let promise = {};
        if( vendor) {
          Object.assign(propsToSubmit, {
            updatedByUser: auth.uid,
            updatedByTenantId: profile.tenantId,
            updatedDate: new Date()
          });
          promise = firestore.set('tenants/'+ profile.tenantId +'/vendors/' + vendor.id, propsToSubmit)
        } else {
          Object.assign(propsToSubmit, {
            createdByUser: auth.uid,
            createdByTenantId: profile.tenantId,
            createdDate: new Date()
          });
          promise = firestore.add('tenants/' + profile.tenantId + '/vendors', propsToSubmit)
        }

        promise.then(() => {
          ToastAndroid.show('Vendor has been saved successfully!', ToastAndroid.BOTTOM);
        }, (e) => {
          ToastAndroid.show('Error saving vendor! Please try again', ToastAndroid.BOTTOM);
        });
        if(listUrl) {
          navigation.navigate(listUrl);
        } else {
          navigation.goBack(null);
        }
      },
      /*-- ADD SELECT PROPS --*/
      /*-- ADD FORMINPUT HANDLER --*/
    }),
    withPropsOnChange(
      requiredProps,
      props => ({ isValid: !!props.name && props.name.length > 0 && isFieldsFilled(requiredProps, props) }),
    ),    
    lifecycle({
      componentDidMount() {
        const {
          vendor,
          setName,
          /*-- SET FORMINPUT VALUE --*/
        } = this.props;

        if(vendor) {
          const { name, /*-- FETCH PROPS --*/ } = vendor;
          setName(name);
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
  
  
  export default hoistStatics(enhance)(VendorEditor);
  