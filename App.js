import React from 'react';
import { StatusBar, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { lifecycle } from 'recompose';
import { store, persistor, rrfProps } from './app/store';
import Navigator from './app/navigation/NavigatorContainer';
import styles from './app/styles/AppStyles';
import colors from './app/styles/colors';
import { appOperations } from './app/modules/app';
import { YellowBox } from 'react-native';
import ReactReduxFirebaseProvider from 'react-redux-firebase/lib/ReactReduxFirebaseProvider'

YellowBox.ignoreWarnings(['Setting a timer',  'Require cycle:',]);
const AppContext = React.createContext();
const App = () => (
  <AppContext.Provider>
    <MenuProvider>
      <View style={styles.rootStyle}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.white}
        />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ReactReduxFirebaseProvider {...rrfProps}>
              <Navigator />
            </ReactReduxFirebaseProvider>
          </PersistGate>
        </Provider>
      </View>
    </MenuProvider>
  </AppContext.Provider>
);

const enhance = lifecycle({
  componentDidMount() {
    store.dispatch(appOperations.loadAssets());
  },
});

export default enhance(App);
