import { LogInPage, SignInPage } from './pages/enterPage/EnterPage';
import HomePage from './pages/homePage/HomePage';
import {
	ProfilePage,
	ChangeProfilePage,
	ChangeProfilePasswordPage,
} from './pages/profilePage/ProfilePage';
import {
	Error404Page,
	Error500Page,
} from './pages/errorPage/ErrorPage';
import router from './utils/router/router';

import { TRoutes } from './types/types';


const routes: TRoutes = [
	{ path: '/', component: LogInPage },
	{ path: '/login', component: LogInPage },
	{ path: '/signin', component: SignInPage },
	{ path: '/home', component: HomePage },
	{ path: '/home/chat', component: HomePage },
	{ path: '/error500', component: Error500Page },
	{ path: '/error404', component: Error404Page },
	{ path: '/profile', component: ProfilePage },
	{ path: '/profile/changedata', component: ChangeProfilePage },
	{ path: '/profile/changepass', component: ChangeProfilePasswordPage },
];

router(routes);
