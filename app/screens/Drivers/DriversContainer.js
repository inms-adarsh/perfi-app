import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import DriversScreenView from './DriversScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const drivers = state.firestore.ordered.currentDrivers;
      return ({
        drivers,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'drivers' }], storeAs: 'currentDrivers' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'drivers'], (props) => ({ drivers: props.searchTerm? Utils.filterArrayByString(props.drivers, props.searchTerm): props.drivers })),
    withHandlers({
      goEditDriver: props => (driver) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            driver,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.DriverEditor, {
            title: 'Edit Driver',
            driver,
          });
        }
      },
      goAddDriver: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.DriverEditor, {
          title: 'New Driver',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(DriversScreenView);
  