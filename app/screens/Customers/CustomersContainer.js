import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import CustomersScreenView from './CustomersScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const customers = state.firestore.ordered.currentCustomers;
      return ({
        customers,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'customers' }], storeAs: 'currentCustomers' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withProps(({ navigation }) => ({ returnParam: getParam('returnParam')(navigation) })),
    withPropsOnChange(['searchTerm', 'customers'], (props) => ({ customers: props.searchTerm? Utils.filterArrayByString(props.customers, props.searchTerm): props.customers })),
    withHandlers({
      goEditCustomer: props => (customer) => {
        if(props.backUrl) {
          const returnParam = props.returnParam;
          props.navigation.navigate(props.backUrl, {            
            [returnParam]: customer,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.CustomerEditor, {
            title: 'Edit Customer',
            customer,
          });
        }
      },
      goAddCustomer: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.CustomerEditor, {
          title: 'New Customer',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(CustomersScreenView);
  