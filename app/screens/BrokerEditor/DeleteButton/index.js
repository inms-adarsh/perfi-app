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
    const broker = getParam('broker')(navigation);
    const deleteBroker = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/brokers/'+broker.id
      ).then(() => {
        ToastAndroid.show('Broker has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      broker,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!broker,
      onPress: () => deleteBroker(broker.id),
    };
  }),
);

export default enhance(NavigationButton);
