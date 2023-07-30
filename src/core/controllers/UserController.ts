import UserAPI from '../api/UserAPI';
import { TUser } from '../../types/types';
import store from '../store/Store';


class UserController {
	private api = new UserAPI();

	async changeUserProfile(data: TUser) {
		try {
			const result = await this.api.changeUserProfile(data);

			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}

			const newUserInfo = JSON.parse(result.response);

			store.set('user', {
				...newUserInfo,
				avatar: 'https://ya-praktikum.tech/api/v2/resources' + newUserInfo.avatar,
			});

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

			const newUserInfo = JSON.parse(result.response);

			store.set('user', {
				...newUserInfo,
				avatar: 'https://ya-praktikum.tech/api/v2/resources' + newUserInfo.avatar,
			});

			return result;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default new UserController();
