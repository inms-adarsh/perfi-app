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
    const driver = getParam('driver')(navigation);
    const deleteDriver = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/drivers/'+driver.id
      ).then(() => {
        ToastAndroid.show('Driver has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      driver,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!driver,
      onPress: () => deleteDriver(driver.id),
    };
  }),
);

export default enhance(NavigationButton);
