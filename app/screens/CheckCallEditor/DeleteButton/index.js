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
    const checkcall = getParam('checkcall')(navigation);
    const deleteCheckCall = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/checkcalls/'+checkcall.id
      ).then(() => {
        ToastAndroid.show('CheckCall has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      checkcall,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!checkcall,
      onPress: () => deleteCheckCall(checkcall.id),
    };
  }),
);

export default enhance(NavigationButton);
