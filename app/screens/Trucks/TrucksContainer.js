import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import TrucksScreenView from './TrucksScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const trucks = state.firestore.ordered.currentTrucks;
      return ({
        trucks,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'trucks' }], storeAs: 'currentTrucks' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'trucks'], (props) => ({ trucks: props.searchTerm? Utils.filterArrayByString(props.trucks, props.searchTerm): props.trucks })),
    withHandlers({
      goEditTruck: props => (truck) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            truck,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.TruckEditor, {
            title: 'Edit Truck',
            truck,
          });
        }
      },
      goAddTruck: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.TruckEditor, {
          title: 'New Truck',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(TrucksScreenView);
  