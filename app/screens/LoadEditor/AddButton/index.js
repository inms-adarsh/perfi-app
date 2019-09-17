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
    const onSubmit = getParam('onSubmit')(navigation);
    return {
      title: 'Save',
      backOnSuccess: true,
      onPress: () => onSubmit,
    };
  }),
);

export default enhance(NavigationButton);
