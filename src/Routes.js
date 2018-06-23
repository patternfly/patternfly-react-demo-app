import Ipsum from './pages/Ipsum';
import Ipsum1A from './pages/Ipsum-1-A';
import Ipsum1B from './pages/Ipsum-1-B';
import Dolor from './pages/Dolor';
import Amet from './pages/Amet';
import Orbis from './pages/Orbis';

const baseName = '/';

const routes = () => [
  {
    iconClass: 'fa fa-dashboard',
    title: 'Ipsum',
    to: '/',
    component: Ipsum,
    subItems: [
      {
        iconClass: 'fa fa-envelope-open',
        title: 'Item 1-A',
        to: '/ipsum/item-1-A',
        component: Ipsum1A
      },
      {
        iconClass: 'fa fa-envelope-closed',
        title: 'Item 1-B',
        to: '/ipsum/item-1-B',
        component: Ipsum1B
      }
    ]
  },
  {
    iconClass: 'fa fa-star',
    title: 'Dolor',
    to: '/dolor',
    component: Dolor
  },
  {
    iconClass: 'fa fa-bell',
    title: 'Amet',
    to: '/amet',
    component: Amet
  },
  {
    iconClass: 'fa fa-shield',
    title: 'Orbis',
    to: '/orbis',
    component: Orbis
  }
];

export { baseName, routes };
