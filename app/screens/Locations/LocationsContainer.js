import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import LocationsScreenView from './LocationsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const locations = state.firestore.ordered.currentLocations;
      return ({
        locations,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'locations' }], storeAs: 'currentLocations' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withProps(({ navigation }) => ({ returnParam: getParam('returnParam')(navigation) })),
    withPropsOnChange(['searchTerm', 'locations'], (props) => ({ locations: props.searchTerm? Utils.filterArrayByString(props.locations, props.searchTerm): props.locations })),
    withHandlers({
      goEditLocation: props => (location) => {
        if(props.backUrl) {
          const returnParam = props.returnParam;
          props.navigation.navigate(props.backUrl, {
            [returnParam]: location,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LocationEditor, {
            title: 'Edit Location',
            location,
          });
        }
      },
      goAddLocation: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.LocationEditor, {
          title: 'New Location',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(LocationsScreenView);
  