import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import HOC from '../HOC/hoc';

const indexRoutes = [
    { path: '/', name: 'Page1', component: HOC(Page1) },
    { path: '/page2', name: 'Page2', component: HOC(Page2) }
];

export default indexRoutes;