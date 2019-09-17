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
    const vendor = getParam('vendor')(navigation);
    const deleteVendor = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/vendors/'+vendor.id
      ).then(() => {
        ToastAndroid.show('Vendor has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      vendor,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!vendor,
      onPress: () => deleteVendor(vendor.id),
    };
  }),
);

export default enhance(NavigationButton);
