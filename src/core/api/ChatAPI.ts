import BaseAPI from './api';


class ChatAPI extends BaseAPI {
	constructor() {
		super('/chats');
	}

	public getChats(): Promise<XMLHttpRequest> {
		return this.http.get('/', {
			withCredentials: true,
		});
	}

	public createChat(data: { title: string }): Promise<XMLHttpRequest> {
		return this.http.post('/', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	public deleteChatById(data: { chatId: string | number }): Promise<XMLHttpRequest> {
		return this.http.delete('/', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	public getChatUsers(id: string | number): Promise<XMLHttpRequest> {
		return this.http.get(`/${id}/users`, {
			withCredentials: true,
		});
	}

	public addUserToChat(data: { users: number[], chatId: string | number }): Promise<XMLHttpRequest> {
		return this.http.put('/users', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	public deleteUserFromChat(data: { users: number[], chatId: string | number }): Promise<XMLHttpRequest> {
		return this.http.delete('/users', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	public uploadChatAvatar(data: FormData): Promise<XMLHttpRequest> {
		return this.http.put('/avatar', {
			headers: {},
			withCredentials: true,
			data,
		});
	}

	public getToken(id: number): Promise<XMLHttpRequest> {
		return this.http.post(`/token/${id}`, {
			withCredentials: true,
		});
	}
}


export default ChatAPI;
