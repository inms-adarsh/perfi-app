import {
    compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
    withPropsOnChange,
  } from 'recompose';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { Keyboard, ToastAndroid } from 'react-native';
  import SettingEditor from './SettingEditorScreenView';
  import { getParam } from '../../utils/navHelpers';
  import { firestoreConnect } from 'react-redux-firebase'
  /*-- IMPORT SCREENS --*/
  
  const screenProp = (propName, def) => R.pathOr(def, ['setting', propName]); 
  const requiredProps = ['name', 'phone', 'address', 'pan', 'email', 'gst',/*-- ADD PROPS --*/];
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
    withProps(({ navigation }) => ({ setting: getParam('setting')(navigation) })),
   
    withState('name', 'setName', screenProp('name', '')),
    /*-- ADD STATE PROPS --*/
		withState('gst', 'setGst', screenProp('gst', '')),
		withState('email', 'setEmail', screenProp('email', '')),
		withState('pan', 'setPan', screenProp('pan', '')),
		withState('address', 'setAddress', screenProp('address', '')),
		withState('phone', 'setPhone', screenProp('phone', '')),

    /*-- ADD NAV PROPS --*/
    withProps(({/*-- FETCH PROPS --*/}) => ({
      /*-- ADD LOOKUP PROPS --*/
    })),    
    withHandlers({
    
      onSubmit: ({
        navigation, firestore, auth, profile, listUrl, setting, onClose, ...props
      }) => () => {
        Keyboard.dismiss();
        const editedProps = R.pick(['name', 'phone', 'address', 'pan', 'email', 'gst',/*-- ADD PROPS --*/], props);
        const propsToSubmit = setting ? Object.assign(setting, editedProps) : editedProps;
        let promise = {};
        if( setting) {
          Object.assign(propsToSubmit, {
            updatedByUser: auth.uid,
            updatedByTenantId: profile.tenantId,
            updatedDate: new Date()
          });
          promise = firestore.set('tenants/'+ profile.tenantId +'/settings/' + setting.id, propsToSubmit)
        } else {
          Object.assign(propsToSubmit, {
            createdByUser: auth.uid,
            createdByTenantId: profile.tenantId,
            createdDate: new Date()
          });
          promise = firestore.add('tenants/' + profile.tenantId + '/settings', propsToSubmit)
        }

        promise.then(() => {
          ToastAndroid.show('Setting has been saved successfully!', ToastAndroid.BOTTOM);
        }, (e) => {
          ToastAndroid.show('Error saving setting! Please try again', ToastAndroid.BOTTOM);
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
      props => ({ isValid: isFieldsNotEmpty(requiredProps, props) && isFieldsFilled(requiredProps, props) }),
    ),    
    lifecycle({
      componentDidMount() {
        const {
          setting,
          setName,
          /*-- SET FORMINPUT VALUE --*/
        } = this.props;

        if(setting) {
          const { name, /*-- FETCH PROPS --*/ } = setting;
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
  
  
  export default hoistStatics(enhance)(SettingEditor);
  