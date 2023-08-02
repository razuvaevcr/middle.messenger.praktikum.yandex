import AuthAPI from '../api/AuthAPI';
import { TSignInData, TSignUpData } from '../../types/types';
import store from '../store/Store';
import router from '../router/router';
import BASE_URL_RESOURCES from './baseURL';


class AuthController {
	private api = new AuthAPI();

	async signin(data: TSignInData) {
		try {
			await this.api.signin(data);

			await this.fetchUser();

			router.go('/messenger');
			console.log('loged in');
		} catch (error) {
			console.log(error);
		}
	}

	async signup(data: TSignUpData) {
		try {
			await this.api.signup(data);

			router.go('/messenger');
		} catch (error) {
			console.log(error);
		}
	}

	async logout() {
		try {
			await this.api.logout();

			store.set('user', undefined);

			router.go('/');
			console.log('loged out');
		} catch (error) {
			console.log(error);
		}
	}

	async fetchUser() {
		try {
			const request = await this.api.getUser();

			if (request.status !== 200) {
				throw new Error(`Ошибка: ${request.status} ${request.statusText || request.responseText}`);
			}

			const user = JSON.parse(request.response);

			store.set('user', { ...user, avatar: `${BASE_URL_RESOURCES}${user.avatar}` });
		} catch (error) {
			throw error;
		}
	}
}

export default new AuthController();
