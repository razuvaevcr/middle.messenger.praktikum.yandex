import UserAPI from '../api/UserAPI';
import { TUser } from '../../types/types';
import store from '../store/Store';
import BASE_URL_RESOURCES from './baseURL';


class UserController {
	private api = new UserAPI();

	async changeUserProfile(data: TUser) {
		try {
			const result = await this.api.changeUserProfile(data);

			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}

			const user = JSON.parse(result.response);

			store.set('user', { ...user, avatar: `${BASE_URL_RESOURCES}${user.avatar}` });

			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	async changeUserPassword(data: { oldPassword: string, newPassword: string }) {
		try {
			const result = await this.api.changeUserPassword(data);

			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}

			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	async changeUserAvatar(data: FormData) {
		try {
			const result = await this.api.changeUserAvatar(data);

			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}

			const user = JSON.parse(result.response);

			store.set('user', { ...user, avatar: `${BASE_URL_RESOURCES}${user.avatar}` });

			return result;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default new UserController();
