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
    const location = getParam('location')(navigation);
    const deleteLocation = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/locations/'+location.id
      ).then(() => {
        ToastAndroid.show('Location has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      location,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!location,
      onPress: () => deleteLocation(location.id),
    };
  }),
);

export default enhance(NavigationButton);
