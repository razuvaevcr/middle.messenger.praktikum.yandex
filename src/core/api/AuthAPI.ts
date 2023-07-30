import BaseAPI from './api';
import { TSignInData, TSignUpData } from '../../types/types';


class AuthAPI extends BaseAPI {
	constructor() {
		super('/auth');
	}

	signin(data: TSignInData): Promise<XMLHttpRequest> {
		return this.http.post('/signin', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	signup(data: TSignUpData): Promise<XMLHttpRequest> {
		return this.http.post('/signup', {
			data: JSON.stringify(data),
		});
	}

	logout(): Promise<XMLHttpRequest> {
		return this.http.post('/logout', {
			withCredentials: true,
		});
	}

	getUser(): Promise<XMLHttpRequest> {
		return this.http.get('/user', {
			withCredentials: true,
		});
	}
}


export default AuthAPI;
