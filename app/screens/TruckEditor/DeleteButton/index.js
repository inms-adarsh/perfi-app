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
    const truck = getParam('truck')(navigation);
    const deleteTruck = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/trucks/'+truck.id
      ).then(() => {
        ToastAndroid.show('Truck has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      truck,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!truck,
      onPress: () => deleteTruck(truck.id),
    };
  }),
);

export default enhance(NavigationButton);
