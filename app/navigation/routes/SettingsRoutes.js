import screens from '../../constants/screens';
import { Settings, SettingEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Settings]: {
    screen: Settings,
    navigationOptions: headerOptions({ title: 'Settings' }),
  },
  [screens.SettingEditor]: {
    screen: SettingEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
