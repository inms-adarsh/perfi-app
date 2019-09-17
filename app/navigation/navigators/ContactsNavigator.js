import { createBottomTabNavigator } from 'react-navigation';
import ContactsRoutes from '../routes/ContactsRoutes';
import navOptions from '../../utils/navOptions';

const ContactsNavigator = createBottomTabNavigator(ContactsRoutes, {
  ...navOptions({
    title: 'Contacts',
    icon: 'contact',
  }),
});

export default ContactsNavigator;
