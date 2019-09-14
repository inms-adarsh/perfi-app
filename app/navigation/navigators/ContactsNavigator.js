import { createStackNavigator } from 'react-navigation';
import ContactsRoutes from '../routes/ContactsRoutes';
import navOptions from '../../utils/navOptions';

const ContactsNavigator = createStackNavigator(ContactsRoutes, {
  ...navOptions({
    title: 'Contacts',
    icon: 'contact',
  }),
});

export default ContactsNavigator;
