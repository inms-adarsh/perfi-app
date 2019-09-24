import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import OnBoardingScreenView from './OnBoardingScreenView';
import { firebaseConnect, firestoreConnect, getVal } from 'react-redux-firebase';
const enhance = compose(
  connect((state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
  })),  
  firebaseConnect(),
  firestoreConnect(),
  //connect(null, settingsOperations),
  withHandlers({
    onSignIn: props => () => props.signIn(),
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { firebase, navigation, profile } = this.props;
      if (profile.isLoaded && profile.isLoaded != prevProps.profile.isLoaded) {
        firebase.auth().onAuthStateChanged((user) => {
          navigation.navigate(user ? 'DrawerRoot' : 'AuthenticationScreen')
        });
      }
    }
  }),
);

export default hoistStatics(enhance)(OnBoardingScreenView);
