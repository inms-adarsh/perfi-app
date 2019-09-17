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
    const transportation = getParam('transportation')(navigation);
    const deleteTransportation = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/transportations/'+transportation.id
      ).then(() => {
        ToastAndroid.show('Transportation has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      transportation,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!transportation,
      onPress: () => deleteTransportation(transportation.id),
    };
  }),
);

export default enhance(NavigationButton);
