
import {
    compose,
    withState,
    withHandlers,
    hoistStatics,
    withPropsOnChange,
    lifecycle
} from 'recompose';

import { connect } from 'react-redux'
import { getVal, firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { ToastAndroid, Alert } from 'react-native';

import * as Google from 'expo-google-app-auth';
import RegisterPage from './Register';

const enhance = compose(
    firebaseConnect(),
    firestoreConnect(),
    connect(({ firebase }) => ({ auth: getVal(firebase, 'auth') })),
    withState('username', 'setUsername', ''),
    withState('password', 'setPassword', ''),
    withState('showLoader', 'setShowLoader', false),
    withPropsOnChange(
        ['username', 'password'],
        ({ username, password }) => ({ isValid: !!username && username.length > 0 && !!password }),
    ),
    withHandlers({
        registerWithPassword: ({ firebase, setShowLoader, firestore, username, password, navigation }) => async () => {
            setShowLoader(true);
            firebase.auth().createUserWithEmailAndPassword(
                username,
                password
            ).then((res) => {
                firestore.set(`tenants/${res.user.uid}/users/${res.user.uid}`, { username, tenantId: res.user.uid });
                firestore.set(`users/${res.user.uid}`, { username, tenantId: res.user.uid });
                navigation.navigate('DrawerRoot')
            }, (e, res) => {
                setShowLoader(false);
                ToastAndroid.show(e.message, ToastAndroid.BOTTOM);
            })
        },
        goToSignInPage: ({ navigation }) => async () => {
            navigation.navigate('Login')
        },
        registerWithGoogle: ({ firebase }) => async () => {
            try {
                const { type, user, idToken, accessToken } = await Google.logInAsync({
                    androidStandaloneAppClientId: 'com.apiko.perfi',
                    androidClientId: '522231301405-b8rvovag7kbnos7emtkm6u9labbqu2pl.apps.googleusercontent.com',
                    scopes: ['profile', 'email']
                });

                switch (type) {
                    case 'success': {
                        Alert.alert(
                            'Logged in!',
                            `Hi ${user.name}!`,
                        );
                        console.log(user);
                        console.log(type);
                        console.log(idToken);
                        console.log(accessToken);

                        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
                        console.log(credential)
                        /* This next code fails with this error message: 
                          Invalid Idp Response: the Google id_token is not allowed to be used with this application. Its audience (OAuth 2.0 client ID) is 603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com, which is not authorized to be used in the project with project_number: 873097287154.
                        */
                        firebase.auth().signInWithCredential(credential).catch((error) => {
                            // Handle Errors here.
                            console.log("Error authenticating with Google");
                            console.log(error);
                            console.log(error.message);
                        });

                        break;
                    }
                    case 'cancel': {
                        Alert.alert(
                            'Cancelled!',
                            'Register was cancelled!',
                        );
                        break;
                    }
                    default: {
                        Alert.alert(
                            'Oops!',
                            'Register failed!',
                        );
                    }
                }
            } catch (e) {
                Alert.alert(
                    'Oops!',
                    'Register failed!',
                );
            }
        }
    })
);
export default hoistStatics(enhance)(RegisterPage);
