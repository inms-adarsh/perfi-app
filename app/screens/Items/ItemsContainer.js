import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import ItemsScreenView from './ItemsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const items = state.firestore.ordered.currentItems;
      return ({
        items,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'items' }], storeAs: 'currentItems' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'items'], (props) => ({ items: props.searchTerm? Utils.filterArrayByString(props.items, props.searchTerm): props.items })),
    withHandlers({
      goEditItem: props => (item) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            item,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.ItemEditor, {
            title: 'Edit Item',
            item,
          });
        }
      },
      goAddItem: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.ItemEditor, {
          title: 'New Item',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(ItemsScreenView);
  