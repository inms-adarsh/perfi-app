import * as firebase from 'firebase'  // Should not be used elsewhere in the project
import config from './firebaseConfig'

firebase.initializeApp(config);

export default firebase;