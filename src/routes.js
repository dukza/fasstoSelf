import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));


// Layout
const Main = React.lazy(() => import('./layout/Main'));
const Sub = React.lazy(() => import('./layout/Sub'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, layout: Main },
  { path: '/theme', name: 'Theme', component: Colors, exact: true, layout: Sub },
  { path: '/theme/colors', name: 'Colors', title__L: '출고시작',title__R: '상품 자세히 보기', component: Colors, layout: Sub },
  { path: '/theme/typography', name: 'Typography', component: Typography,layout: Sub },
  { path: '/base', name: 'Base', component: Cards, exact: true,layout: Sub },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs,layout: Sub },
  { path: '/base/cards', name: 'Cards', component: Cards,layout: Sub },
  { path: '/base/carousels', name: 'Carousel', component: Carousels,layout: Sub },
  { path: '/base/collapses', name: 'Collapse', component: Collapses,layout: Sub },
  { path: '/base/forms', name: 'Forms', component: BasicForms,layout: Sub },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons,layout: Sub },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups,layout: Sub },
  { path: '/base/navbars', name: 'Navbars', component: Navbars,layout: Sub },
  { path: '/base/navs', name: 'Navs', component: Navs,layout: Sub },
  { path: '/base/paginations', name: 'Paginations', component: Paginations,layout: Sub },
  { path: '/base/popovers', name: 'Popovers', component: Popovers,layout: Sub },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar,layout: Sub },
  { path: '/base/switches', name: 'Switches', component: Switches,layout: Sub },
  { path: '/base/tables', name: 'Tables', component: Tables,layout: Sub },
  { path: '/base/tabs', name: 'Tabs', component: Tabs,layout: Sub },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips,layout: Sub },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true,layout: Sub },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons,layout: Sub },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns,layout: Sub },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups,layout: Sub },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons,layout: Sub },
  { path: '/charts', name: 'Charts', component: Charts,layout: Sub },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons,layout: Sub },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons,layout: Sub },
  { path: '/icons/flags', name: 'Flags', component: Flags,layout: Sub },
  { path: '/icons/brands', name: 'Brands', component: Brands,layout: Sub },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true,layout: Sub },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts,layout: Sub },
  { path: '/notifications/badges', name: 'Badges', component: Badges,layout: Sub },
  { path: '/notifications/modals', name: 'Modals', component: Modals,layout: Sub },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster,layout: Sub },
  { path: '/widgets', name: 'Widgets', component: Widgets,layout: Sub },
  { path: '/users', exact: true,  name: 'Users', component: Users,layout: Sub },
  { path: '/users/:id', exact: true, name: 'User Details', component: User,layout: Sub }
];

export default routes;
