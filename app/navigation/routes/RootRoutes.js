import screens from '../../constants/screens';
import {
  AccountsNavigator,
  CategoriesNavigator,
  TransactionsNavigator,
  TrendsNavigator,
  FavouritesNavigator,
  // -- IMPORT --
	ItemsNavigator,
	LocationsNavigator,
	SettingsNavigator,
	LoadsNavigator,
	TrucksNavigator,
  ContactsNavigator,
} from '../navigators';

const Routes = {
  // [screens.TransactionsRoot]: {
  //   screen: TransactionsNavigator,
  // },
  // [screens.AccountsRoot]: {
  //   screen: AccountsNavigator,
  // },
  // [screens.CategoriesRoot]: {
  //   screen: CategoriesNavigator,
  // },
  // [screens.TrendsRoot]: {
  //   screen: TrendsNavigator,
  // },
  // [screens.FavouritesRoot]: {
  //   screen: FavouritesNavigator,
  // },
  // [screens.SettingsRoot]: {
  //   screen: SettingsNavigator,
  // },
  // -- LIST --
  [screens.LoadsRoot]: {
    screen: LoadsNavigator
  },  
  [screens.ContactsRoot]: {
    screen: ContactsNavigator
  },
  [screens.TrucksRoot]: {
    screen: TrucksNavigator
  },
  [screens.LocationsRoot]: {
    screen: LocationsNavigator
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator
  },
  
  // [screens.ItemsRoot]: {
  //   screen: ItemsNavigator
  // },
  
};

export default Routes;
