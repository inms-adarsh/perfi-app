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
  
  [screens.TransactionsRoot]: {
    screen: TransactionsNavigator,
  },
  // [screens.SettingsRoot]: {
  //   screen: SettingsNavigator,
  // },
  [screens.AccountsRoot]: {
    screen: AccountsNavigator,
  },
  [screens.CategoriesRoot]: {
    screen: CategoriesNavigator,
  },
  // [screens.TrendsRoot]: {
  //   screen: TrendsNavigator,
  // },
  // [screens.FavouritesRoot]: {
  //   screen: FavouritesNavigator,
  // },
 
  // -- LIST --
  
 
  // [screens.ItemsRoot]: {
  //   screen: ItemsNavigator
  // },
  
};

export default Routes;
