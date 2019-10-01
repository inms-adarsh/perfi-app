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
    const loadpayment = getParam('loadpayment')(navigation);
    const deleteLoadPayment = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/loadpayments/'+loadpayment.id
      ).then(() => {
        ToastAndroid.show('LoadPayment has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      loadpayment,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!loadpayment,
      onPress: () => deleteLoadPayment(loadpayment.id),
    };
  }),
);

export default enhance(NavigationButton);
