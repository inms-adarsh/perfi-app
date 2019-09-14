import { createStackNavigator } from 'react-navigation';
import { LoginPage, RegisterPage } from '../../screens';

import headerOptions from '../../utils/stackHeaderOptions';

const LoginNavigator = createStackNavigator({
    'Login': {
        screen: LoginPage,
        navigationOptions: headerOptions({ title: 'Login' }),
    }, 
    'Register': {
        screen: RegisterPage,
        navigationOptions: headerOptions({ title: 'Register' }),
    }
});

export default LoginNavigator;
