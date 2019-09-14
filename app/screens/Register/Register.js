import React from 'react'
import PropTypes from 'prop-types'

// import GoogleButton from 'react-google-button' // optional
import {
  Input
} from '../../components';
import { View } from 'react-native';
import styles from './styles';
import { Button,  } from 'react-native-elements';

const RegisterPage = ({
  registerWithPassword,
  goToSignInPage,
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
          placeholder="Email Id"
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
          title="Already have an account? Sign in"
          onPress={goToSignInPage}
          type="clear"
        />
      </View>
      <View style={styles.container}>
        {!showLoader ? (
          <Button
            disabled={!isValid}
            secondaryOpacity
            title="Sign up"
            onPress={registerWithPassword}
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

RegisterPage.propTypes = {
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  auth: PropTypes.object
}
RegisterPage.navigationOptions = ({ navigation }) => ({
  header: null
});

export default RegisterPage;