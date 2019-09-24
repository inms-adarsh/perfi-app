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
    const loadexpense = getParam('loadexpense')(navigation);
    const deleteLoadExpense = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/loadexpenses/'+loadexpense.id
      ).then(() => {
        ToastAndroid.show('LoadExpense has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      loadexpense,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!loadexpense,
      onPress: () => deleteLoadExpense(loadexpense.id),
    };
  }),
);

export default enhance(NavigationButton);
