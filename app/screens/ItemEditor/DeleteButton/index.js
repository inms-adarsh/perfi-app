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
    const item = getParam('item')(navigation);
    const deleteItem = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/items/'+item.id
      ).then(() => {
        ToastAndroid.show('Item has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      item,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!item,
      onPress: () => deleteItem(item.id),
    };
  }),
);

export default enhance(NavigationButton);
