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
import { loadsOperations } from '../../modules/loads/index'
const enhance = compose(
  connect((state, props) => {
    const loads = state.firestore.ordered.currentLoads;
    return ({
      loads,
      auth: state.firebase.auth,
      profile: state.firebase.profile
    })
  },
  loadsOperations
  ),
  firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'loads' }], storeAs: 'currentLoads' }]),
  withState('searchTerm', 'setSearchTerm', ''),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
  withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
  withPropsOnChange(['searchTerm', 'loads'], (props) => ({ loads: props.searchTerm ? Utils.filterArrayByString(props.loads, props.searchTerm) : props.loads })),
  withHandlers({
    goEditLoad: props => (load) => {
      props.selectLoad(load);
      props.navigation.navigate('LoadDetails', {
        title: 'View Load',
        load,
      });
    },
    goAddLoad: props => () => {
      props.navigation.navigate(props.editorUrl ? props.editorUrl : screens.LoadEditor, {
        title: 'New Load',
        listUrl: props.navigation.state.routeName
      });
    },
    search: ({ setSearchTerm }) => (searchTerm) => {
      setSearchTerm(searchTerm);
    }
  })
);


export default hoistStatics(enhance)(LoadsScreenView);
