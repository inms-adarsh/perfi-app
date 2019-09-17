import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import VendorsScreenView from './VendorsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const vendors = state.firestore.ordered.currentVendors;
      return ({
        vendors,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'vendors' }], storeAs: 'currentVendors' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'vendors'], (props) => ({ vendors: props.searchTerm? Utils.filterArrayByString(props.vendors, props.searchTerm): props.vendors })),
    withHandlers({
      goEditVendor: props => (vendor) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            vendor,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.VendorEditor, {
            title: 'Edit Vendor',
            vendor,
          });
        }
      },
      goAddVendor: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.VendorEditor, {
          title: 'New Vendor',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(VendorsScreenView);
  