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
    const driversettlement = getParam('driversettlement')(navigation);
    const deleteDriverSettlement = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/driversettlements/'+driversettlement.id
      ).then(() => {
        ToastAndroid.show('DriverSettlement has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      driversettlement,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!driversettlement,
      onPress: () => deleteDriverSettlement(driversettlement.id),
    };
  }),
);

export default enhance(NavigationButton);
