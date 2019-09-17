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
    const setting = getParam('setting')(navigation);
    const deleteSetting = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/settings/'+setting.id
      ).then(() => {
        ToastAndroid.show('Setting has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      setting,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!setting,
      onPress: () => deleteSetting(setting.id),
    };
  }),
);

export default enhance(NavigationButton);
