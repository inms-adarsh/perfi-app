import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { getParam } from '../../../utils/navHelpers';
import { NavigationButton } from '../../../components';
import { firestoreConnect } from 'react-redux-firebase';
import { ToastAndroid } from 'react-native';
const enhance = compose(
  firestoreConnect(),
  connect((state) => ({
    profile: state.firebase.profile
  })),
  withProps(({ navigation, firestore, profile }) => {
    const staff = getParam('staff')(navigation);
    const deleteStaff = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/staffs/'+staff.id
      ).then(() => {
        ToastAndroid.show('Staff has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      staff,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!staff,
      onPress: () => deleteStaff(staff.id),
    };
  }),
);

export default enhance(NavigationButton);
