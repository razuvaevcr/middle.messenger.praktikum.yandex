import BaseAPI from './api';
import { TUser } from '../../types/types';


class UserAPI extends BaseAPI {
	constructor() {
		super('/user');
	}

	public async changeUserProfile(data: TUser): Promise<XMLHttpRequest> {
		return this.http.put('/profile', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	public async changeUserAvatar(data: FormData): Promise<XMLHttpRequest> {
		return await this.http.put('/profile/avatar', {
			headers: {},
			withCredentials: true,
			data,
		});
	}

	public async changeUserPassword(data: { oldPassword: string, newPassword: string }): Promise<XMLHttpRequest> {
		return await this.http.put('/password', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	public async getUserById(id: string | number): Promise<XMLHttpRequest> {
		return await this.http.get(`/${id}`, {
			withCredentials: true,
		});
	}

	public async searchUserByLogin(data: { login: string }): Promise<XMLHttpRequest> {
		return await this.http.post('/search', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}
}


export default UserAPI;
