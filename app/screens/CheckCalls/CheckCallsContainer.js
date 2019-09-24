import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange,
    lifecycle
  } from 'recompose';
  import { connect } from 'react-redux';
  import CheckCallsScreenView from './CheckCallsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  import { Alert } from 'react-native';

  const enhance = compose(
    connect((state, props) => {      
      const checkcalls = state.firestore.ordered.currentCheckCalls;
      return ({
        checkcalls,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        currentLoad: state.loads.currentLoad
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'checkcalls' }], storeAs: 'currentCheckCalls' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
    withProps(({ navigation }) => ({ load: getParam('load')(navigation) })),       
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'checkcalls'], (props) => ({ checkcalls: props.searchTerm? Utils.filterArrayByString(props.checkcalls, props.searchTerm): props.checkcalls })),
    withHandlers({
      goEditCheckCall: props => (checkcall) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            checkcall,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.CheckCallEditor, {
            title: 'Edit CheckCall',
            checkcall,
          });
        }
      },
      goAddCheckCall: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.CheckCallEditor, {
          title: 'New CheckCall',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    }),
    lifecycle({
      componentDidMount() {
        const {
          navigation,
          currentLoad
        } = this.props;
      }
    })
  );
  
  
  export default hoistStatics(enhance)(CheckCallsScreenView);
  