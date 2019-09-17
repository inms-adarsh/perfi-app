import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import BrokersScreenView from './BrokersScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const brokers = state.firestore.ordered.currentBrokers;
      return ({
        brokers,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'brokers' }], storeAs: 'currentBrokers' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'brokers'], (props) => ({ brokers: props.searchTerm? Utils.filterArrayByString(props.brokers, props.searchTerm): props.brokers })),
    withHandlers({
      goEditBroker: props => (broker) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            broker,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.BrokerEditor, {
            title: 'Edit Broker',
            broker,
          });
        }
      },
      goAddBroker: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.BrokerEditor, {
          title: 'New Broker',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(BrokersScreenView);
  