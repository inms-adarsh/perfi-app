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
    const customer = getParam('customer')(navigation);
    const deleteCustomer = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/customers/'+customer.id
      ).then(() => {
        ToastAndroid.show('Customer has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      customer,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!customer,
      onPress: () => deleteCustomer(customer.id),
    };
  }),
);

export default enhance(NavigationButton);
