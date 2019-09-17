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
    const load = getParam('load')(navigation);
    const deleteLoad = (id) => {
      firestore.delete('tenants/'+profile.tenantId+'/loads/'+load.id
      ).then(() => {
        ToastAndroid.show('Load has been deleted successfully!', ToastAndroid.TOP);
      })
    } 
    return {
      load,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!load,
      onPress: () => deleteLoad(load.id),
    };
  }),
);

export default enhance(NavigationButton);
