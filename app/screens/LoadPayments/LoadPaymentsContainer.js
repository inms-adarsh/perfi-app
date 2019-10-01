import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import LoadPaymentsScreenView from './LoadPaymentsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const loadpayments = state.firestore.ordered.currentLoadPayments;
      return ({
        loadpayments,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'loadpayments' }], storeAs: 'currentLoadPayments' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'loadpayments'], (props) => ({ loadpayments: props.searchTerm? Utils.filterArrayByString(props.loadpayments, props.searchTerm): props.loadpayments })),
    withHandlers({
      goEditLoadPayment: props => (loadpayment) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            loadpayment,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LoadPaymentEditor, {
            title: 'Edit LoadPayment',
            loadpayment,
          });
        }
      },
      goAddLoadPayment: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LoadPaymentEditor, {
          title: 'New LoadPayment',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(LoadPaymentsScreenView);
  