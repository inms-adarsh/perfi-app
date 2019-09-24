import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import DriverSettlementsScreenView from './DriverSettlementsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const driversettlements = state.firestore.ordered.currentDriverSettlements;
      return ({
        driversettlements,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'driversettlements' }], storeAs: 'currentDriverSettlements' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'driversettlements'], (props) => ({ driversettlements: props.searchTerm? Utils.filterArrayByString(props.driversettlements, props.searchTerm): props.driversettlements })),
    withHandlers({
      goEditDriverSettlement: props => (driversettlement) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            driversettlement,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.DriverSettlementEditor, {
            title: 'Edit DriverSettlement',
            driversettlement,
          });
        }
      },
      goAddDriverSettlement: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.DriverSettlementEditor, {
          title: 'New DriverSettlement',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(DriverSettlementsScreenView);
  