import InboxIcon from 'material-ui-icons/MoveToInbox';
import SettingsIcon from 'material-ui-icons/Settings';
import PersonIcon from 'material-ui-icons/Person';
import LobbyIcon from 'material-ui-icons/Tab';
import StatisticsIcon from 'material-ui-icons/DataUsage';
import FriendsIcon from 'material-ui-icons/PersonAdd';

const profileList = [
  {
    name: 'Profile',
    icon: PersonIcon,
    url: '/profile'
  },
  {
    name: 'Friends',
    icon: FriendsIcon,
    url: '/profile/friends',
  },
  {
    name: 'Lobbies',
    icon: LobbyIcon,
    url: '/profile/lobby',
  },
  {
    name: 'Statistics',
    icon: StatisticsIcon,
    url: '/profile/statistics',
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
