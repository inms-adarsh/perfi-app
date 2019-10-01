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
    const finalizeloadbilty = getParam('finalizeloadbilty')(navigation);
    const deleteFinalizeLoadBilty = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/finalizeloadbiltys/'+finalizeloadbilty.id
      ).then(() => {
        ToastAndroid.show('FinalizeLoadBilty has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      finalizeloadbilty,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!finalizeloadbilty,
      onPress: () => deleteFinalizeLoadBilty(finalizeloadbilty.id),
    };
  }),
);

export default enhance(NavigationButton);
