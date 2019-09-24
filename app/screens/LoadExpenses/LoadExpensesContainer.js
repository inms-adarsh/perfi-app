import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import LoadExpensesScreenView from './LoadExpensesScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const loadexpenses = state.firestore.ordered.currentLoadExpenses;
      return ({
        loadexpenses,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        currentLoad: state.loads.currentLoad
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'loadexpenses' }], storeAs: 'currentLoadExpenses' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'loadexpenses'], (props) => ({ loadexpenses: props.searchTerm? Utils.filterArrayByString(props.loadexpenses, props.searchTerm): props.loadexpenses })),
    withHandlers({
      goEditLoadExpense: props => (loadexpense) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            loadexpense,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LoadExpenseEditor, {
            title: 'Edit LoadExpense',
            loadexpense,
          });
        }
      },
      goAddLoadExpense: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LoadExpenseEditor, {
          title: 'New LoadExpense',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(LoadExpensesScreenView);
  