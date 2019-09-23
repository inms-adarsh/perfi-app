import {
  compose,
  withState,
  hoistStatics,
  withHandlers,
  withProps,
  withPropsOnChange,
  lifecycle
} from 'recompose';
import { connect } from 'react-redux';
import LoadDetailsView from './LoadDetailsView';
import screens from '../../constants/screens';
import { getParam } from '../../utils/navHelpers';

import * as Permissions from 'expo-permissions';
import * as Print from 'expo-print';
import bilty from './templates/bilty';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
const enhance = compose(
  firebaseConnect(),
  firestoreConnect(),
  connect((state, props) => {
    const currentLoadNumber = state.firestore.ordered.recentLoadNumber && state.firestore.ordered.recentLoadNumber[0] && state.firestore.ordered.recentLoadNumber[0].currentLoadNumber;
    const settings = state.firestore.ordered.settings && state.firestore.ordered.settings[0];
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      currentLoadNumber,
      settings
    }
  }),
  firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'currentLoadNumber' }], storeAs: 'recentLoadNumber' }]),
  firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'settings' }], storeAs: 'settings' }]),
  withProps(({ navigation }) => ({ load: getParam('load')(navigation) })),
  withHandlers({
    goEditLoad: props => () => {
      props.navigation.navigate(props.editorUrl ? props.editorUrl : screens.LoadEditor, {
        title: 'Edit Load',
        load: props.load,
      });
    },
    generateBilty: props => async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        let file = await Print.printAsync({
          html: bilty(props)
        })
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        navigation,
        goEditLoad,
      } = this.props;
      navigation.setParams({ goEditLoad: goEditLoad });
    }
  })
);


export default hoistStatics(enhance)(LoadDetailsView);
