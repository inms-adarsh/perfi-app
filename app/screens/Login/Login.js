import React from 'react'
import PropTypes from 'prop-types'

// import GoogleButton from 'react-google-button' // optional
import {
  Input
} from '../../components';
import { View } from 'react-native';
import { Button,  } from 'react-native-elements';
import styles from './styles';

const LoginPage = ({
  goToSignUpPage,
  loginWithPassword,
  setUsername,
  setPassword,
  username,
  password,
  isValid,
  showLoader
}) => {

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Input
          isValid
          placeholder="Login"
          value={username}
          autoFocus={true}
          onChangeText={setUsername}
          containerStyle={styles.input}
        />
      </View>
      <View style={styles.container}>
        <Input
          isValid
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          containerStyle={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.container}>
        <Button
          title="Create Account"
          onPress={goToSignUpPage}
          type="clear"
        />
      </View>
      <View style={styles.container}>
        {!showLoader ? (
          <Button
            title="Login"
            onPress={loginWithPassword}
            disabled={!isValid}
            containerStyle={styles.input}
          />
        ) : <Button
            title="Loading button"
            type="clear"
            loading
          />}
      </View>
    </View>

  )
}

LoginPage.propTypes = {
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  auth: PropTypes.object
}


LoginPage.navigationOptions = ({ navigation }) => ({
  header: null
});


export default LoginPage;
