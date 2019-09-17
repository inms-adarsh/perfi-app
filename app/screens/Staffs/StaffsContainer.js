import {
    compose,
    withState,
    hoistStatics,
    withHandlers,
    withProps,
    withPropsOnChange
  } from 'recompose';
  import { connect } from 'react-redux';
  import StaffsScreenView from './StaffsScreenView';
  import screens from '../../constants/screens';  
  import { getParam } from '../../utils/navHelpers';
  import Utils from '../../config/Utils';
  import { firestoreConnect } from 'react-redux-firebase'
  const enhance = compose(
    connect((state, props) => {      
      const staffs = state.firestore.ordered.currentStaffs;
      return ({
        staffs,
        auth: state.firebase.auth,
        profile: state.firebase.profile
      })
    }), 
    firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'staffs' }], storeAs: 'currentStaffs' }]),
    withState('searchTerm', 'setSearchTerm', ''),
    withState('selectedTabIndex', 'setSelectedTabIndex', 0),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),    
    withProps(({ navigation }) => ({ editorUrl: getParam('editorUrl')(navigation) })),
    withPropsOnChange(['searchTerm', 'staffs'], (props) => ({ staffs: props.searchTerm? Utils.filterArrayByString(props.staffs, props.searchTerm): props.staffs })),
    withHandlers({
      goEditStaff: props => (staff) => {
        if(props.backUrl) {
          props.navigation.navigate(props.backUrl, {
            staff,
            backUrl: props.navigation.state.routeName
          });
        } else {
          props.navigation.navigate(props.editorUrl? props.editorUrl: screens.StaffEditor, {
            title: 'Edit Staff',
            staff,
          });
        }
      },
      goAddStaff: props => () => {
        props.navigation.navigate(props.editorUrl? props.editorUrl: screens.StaffEditor, {
          title: 'New Staff',
          listUrl: props.navigation.state.routeName
        });
      },
      search: ({setSearchTerm}) => (searchTerm) => {
        setSearchTerm(searchTerm);
      }
    })
  );
  
  
  export default hoistStatics(enhance)(StaffsScreenView);
  