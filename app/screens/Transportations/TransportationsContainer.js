import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import TransportationsScreenView from './TransportationsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const transportations = state.firestore.ordered.currentTransportations;
      return ({
        transportations,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'transportations' }], storeAs: 'currentTransportations' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'transportations'], (props) => ({ transportations: props.searchTerm? Utils.filterArrayByString(props.transportations, props.searchTerm): props.transportations })),
    withHandlers({
      goEditTransportation: props => (transportation) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            transportation,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.TransportationEditor, {
            title: 'Edit Transportation',
            transportation,
          });
        }
      },
      goAddTransportation: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.TransportationEditor, {
          title: 'New Transportation',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(TransportationsScreenView);
  