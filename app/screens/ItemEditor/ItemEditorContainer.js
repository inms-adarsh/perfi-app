import {
    compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
    withPropsOnChange,
  } from 'recompose';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { Keyboard, ToastAndroid } from 'react-native';
  import ItemEditor from './ItemEditorScreenView';
  import { getParam } from '../../utils/navHelpers';
  import { firestoreConnect } from 'react-redux-firebase'
  /*-- IMPORT SCREENS --*/
  
  const screenProp = (propName, def) => R.pathOr(def, ['item', propName]); 
  const requiredProps = ['name', 'weight',/*-- ADD PROPS --*/];
  const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));
  const isFieldsNotEmpty = R.pipe(R.props, R.none(R.isEmpty));
  const enhance = compose(
    firestoreConnect(),    
    connect((state, props) => ({
      auth: state.firebase.auth,
      profile: state.firebase.profile
    })),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
    withProps(({ navigation }) => ({ listUrl: getParam('listUrl')(navigation) })),
    withProps(({ navigation }) => ({ item: getParam('item')(navigation) })),
   
    withState('name', 'setName', screenProp('name', '')),
    /*-- ADD STATE PROPS --*/
		withState('packet', 'setPacket', screenProp('packet', '')),
		withState('unit', 'setUnit', screenProp('unit', '')),
		withState('weight', 'setWeight', screenProp('weight', '')),

    /*-- ADD NAV PROPS --*/
    withProps(({/*-- FETCH PROPS --*/}) => ({
      /*-- ADD LOOKUP PROPS --*/
    })),    
    withHandlers({
    
      onSubmit: ({
        navigation, firestore, auth, profile, backUrl, item, onClose, ...props
      }) => () => {
        Keyboard.dismiss();
        const editedProps = R.pick(['name', 'weight', 'unit', 'packet',/*-- ADD PROPS --*/], props);
        const propsToSubmit = item ? Object.assign(item, editedProps) : editedProps;
        let promise = {};
        if( item) {
          Object.assign(propsToSubmit, {
            updatedByUser: auth.uid,
            updatedByTenantId: profile.tenantId,
            updatedDate: new Date()
          });
         // promise = firestore.set('tenants/'+ profile.tenantId +'/items/' + item.id, propsToSubmit)
        } else {
          Object.assign(propsToSubmit, {
            createdByUser: auth.uid,
            createdByTenantId: profile.tenantId,
            createdDate: new Date()
          });
         // promise = firestore.add('tenants/' + profile.tenantId + '/items', propsToSubmit)
        }

        // promise.then(() => {
        //   ToastAndroid.show('Item has been saved successfully!', ToastAndroid.BOTTOM);
        // }, (e) => {
        //   ToastAndroid.show('Error saving item! Please try again', ToastAndroid.BOTTOM);
        // });
        if(backUrl) {
          navigation.navigate(backUrl, { item: propsToSubmit});
        } else {
          navigation.goBack(null);
        }
      },
      /*-- ADD SELECT PROPS --*/
      /*-- ADD FORMINPUT HANDLER --*/
    }),
    withPropsOnChange(
      requiredProps,
      props => ({ isValid: isFieldsNotEmpty(requiredProps, props) && isFieldsFilled(['unit'], props) }),
    ),    
    lifecycle({
      componentDidMount() {
        const {
          item,
          setName,
          /*-- SET FORMINPUT VALUE --*/
        } = this.props;

        if(item) {
          const { name, /*-- FETCH PROPS --*/ } = item;
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
  
  
  export default hoistStatics(enhance)(ItemEditor);
  