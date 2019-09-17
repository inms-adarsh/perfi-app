import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import SettingsScreenView from './SettingsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const settings = state.firestore.ordered.currentSettings;
      return ({
        settings,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'settings' }], storeAs: 'currentSettings' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'settings'], (props) => ({ settings: props.searchTerm? Utils.filterArrayByString(props.settings, props.searchTerm): props.settings })),
    withHandlers({
      goEditSetting: props => (setting) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            setting,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.SettingEditor, {
            title: 'Edit Setting',
            setting,
          });
        }
      },
      goAddSetting: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.SettingEditor, {
          title: 'New Setting',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(SettingsScreenView);
  