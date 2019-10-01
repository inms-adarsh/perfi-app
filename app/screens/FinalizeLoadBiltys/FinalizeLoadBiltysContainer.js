import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import FinalizeLoadBiltysScreenView from './FinalizeLoadBiltysScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const finalizeloadbiltys = state.firestore.ordered.currentFinalizeLoadBiltys;
      return ({
        finalizeloadbiltys,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'finalizeloadbiltys' }], storeAs: 'currentFinalizeLoadBiltys' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'finalizeloadbiltys'], (props) => ({ finalizeloadbiltys: props.searchTerm? Utils.filterArrayByString(props.finalizeloadbiltys, props.searchTerm): props.finalizeloadbiltys })),
    withHandlers({
      goEditFinalizeLoadBilty: props => (finalizeloadbilty) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            finalizeloadbilty,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.FinalizeLoadBiltyEditor, {
            title: 'Edit FinalizeLoadBilty',
            finalizeloadbilty,
          });
        }
      },
      goAddFinalizeLoadBilty: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.FinalizeLoadBiltyEditor, {
          title: 'New FinalizeLoadBilty',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(FinalizeLoadBiltysScreenView);
  