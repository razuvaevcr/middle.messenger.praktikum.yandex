import router from './core/router/router';
import LogInPage from './pages/enterPage/LogInPage';
import SignUpPage from './pages/enterPage/SignUpPage';
import HomePage from './pages/homePage/HomePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import ChangeProfilePage from './pages/profilePage/ChangeProfilePage';
import ChangePasswordPage from './pages/profilePage/ChangePasswordPage';
import Error404Page from './pages/errorPage/Error404Page';
import Error500Page from './pages/errorPage/Error500page';
import AuthController from './core/controllers/AuthController';


enum Routes {
	index = '/',
	login = '/login',
	signup = '/signup',
	home = '/home',
	chat = '/home/chat',
	error500 = '/error500',
	error404 = '/error404',
	profile = '/profile',
	changedata = '/profile/changedata',
	changepass = '/profile/changepass',
}

window.addEventListener('DOMContentLoaded', async () => {
	router
		.use(Routes.index, LogInPage)
		.use(Routes.login, LogInPage)
		.use(Routes.signup, SignUpPage)
		.use(Routes.home, HomePage)
		.use(Routes.chat, HomePage)
		.use(Routes.error500, Error500Page)
		.use(Routes.error404, Error404Page)
		.use(Routes.profile, ProfilePage)
		.use(Routes.changedata, ChangeProfilePage)
		.use(Routes.changepass, ChangePasswordPage);

	let isProtectedRoute = true;

	switch (window.location.pathname) {
	case Routes.index:
	case Routes.login:
	case Routes.signup:
		isProtectedRoute = false;
		break;
	}

	try {
		await AuthController.fetchUser();

		router.start();

		if (!isProtectedRoute) {
			router.go('/');
		}
	} catch (e) {
		console.log(e);

		router.start();

		if (isProtectedRoute) {
			router.go('/');
		}
	}
});
