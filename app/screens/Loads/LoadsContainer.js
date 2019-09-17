import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import LoadsScreenView from './LoadsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const loads = state.firestore.ordered.currentLoads;
      return ({
        loads,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'loads' }], storeAs: 'currentLoads' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'loads'], (props) => ({ loads: props.searchTerm? Utils.filterArrayByString(props.loads, props.searchTerm): props.loads })),
    withHandlers({
      goEditLoad: props => (load) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            load,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LoadEditor, {
            title: 'Edit Load',
            load,
          });
        }
      },
      goAddLoad: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LoadEditor, {
          title: 'New Load',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(LoadsScreenView);
  