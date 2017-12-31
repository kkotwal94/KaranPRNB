import InboxIcon from 'material-ui-icons/MoveToInbox';
import SettingsIcon from 'material-ui-icons/Settings';
import PersonIcon from 'material-ui-icons/Person';

const profileList = [
  {
    name: 'Profile',
    icon: PersonIcon,
    url: '/profile'
  },
  {
    name: 'Inbox',
    icon: InboxIcon,
    url: '/profile/inbox'
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
    url: '/profile/settings'
  },
];

export default profileList;
