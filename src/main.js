import EnterPage from './pages/enterPage/EnterPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import HomePage from './pages/homePage/HomePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import router from './utils/router';

const routes = [
	{ path: '/', component: EnterPage, },
	{ path: '/login', component: EnterPage, },
	{ path: '/signin', component: EnterPage, },
	{ path: '/home', component: HomePage, },
	{ path: '/home/chat', component: HomePage, },
	{ path: '/error500', component: ErrorPage, },
	{ path: '/error404', component: ErrorPage, },
	{ path: '/profile', component: ProfilePage, },
	{ path: '/profile/changedata', component: ProfilePage, },
	{ path: '/profile/changepass', component: ProfilePage, },
];

router(routes);
