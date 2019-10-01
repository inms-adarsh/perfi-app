import {
    compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
    withPropsOnChange,
  } from 'recompose';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { Keyboard, ToastAndroid } from 'react-native';
  import FinalizeLoadBiltyEditor from './FinalizeLoadBiltyEditorScreenView';
  import { getParam } from '../../utils/navHelpers';
  import { firestoreConnect } from 'react-redux-firebase'
  /*-- IMPORT SCREENS --*/
  
  const screenProp = (propName, def) => R.pathOr(def, ['finalizeloadbilty', propName]); 
  const requiredProps = ['name',/*-- ADD PROPS --*/];
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
    withProps(({ navigation }) => ({ finalizeloadbilty: getParam('finalizeloadbilty')(navigation) })),
   
    withState('name', 'setName', screenProp('name', '')),
    /*-- ADD STATE PROPS --*/

    /*-- ADD NAV PROPS --*/
    withProps(({/*-- FETCH PROPS --*/}) => ({
      /*-- ADD LOOKUP PROPS --*/
    })),    
    withHandlers({
    
      onSubmit: ({
        navigation, firestore, auth, profile, listUrl, finalizeloadbilty, onClose, ...props
      }) => () => {
        Keyboard.dismiss();
        const editedProps = R.pick(['name',/*-- ADD PROPS --*/], props);
        const propsToSubmit = finalizeloadbilty ? Object.assign(finalizeloadbilty, editedProps) : editedProps;
        let promise = {};
        if( finalizeloadbilty) {
          Object.assign(propsToSubmit, {
            updatedByUser: auth.uid,
            updatedByTenantId: profile.tenantId,
            updatedDate: new Date()
          });
          promise = firestore.set('tenants/'+ profile.tenantId +'/finalizeloadbiltys/' + finalizeloadbilty.id, propsToSubmit)
        } else {
          Object.assign(propsToSubmit, {
            createdByUser: auth.uid,
            createdByTenantId: profile.tenantId,
            createdDate: new Date()
          });
          promise = firestore.add('tenants/' + profile.tenantId + '/finalizeloadbiltys', propsToSubmit)
        }

        promise.then(() => {
          ToastAndroid.show('FinalizeLoadBilty has been saved successfully!', ToastAndroid.BOTTOM);
        }, (e) => {
          ToastAndroid.show('Error saving finalizeloadbilty! Please try again', ToastAndroid.BOTTOM);
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
          finalizeloadbilty,
          setName,
          /*-- SET FORMINPUT VALUE --*/
        } = this.props;

        if(finalizeloadbilty) {
          const { name, /*-- FETCH PROPS --*/ } = finalizeloadbilty;
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
  
  
  export default hoistStatics(enhance)(FinalizeLoadBiltyEditor);
  