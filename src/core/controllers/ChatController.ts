import ChatAPI from '../api/ChatAPI';
import store from '../store/Store';
import ChatListItem from '../../components/chatListItem/ChatListItem';


class ChatController {
	private api = new ChatAPI();

	public async createChat(data: { title: string }) {
		try {
			const result = await this.api.createChat(data);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}
			await this.getChats();
			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	public async deleteChat(data: { chatId: string | number }) {
		try {
			const result = await this.api.deleteChatById(data);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}
			await this.getChats();
			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	public async getChats() {
		try {
			const result = await this.api.getChats();
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}

			const chatsArr = (JSON.parse(result.response)).map((item: any) => {
				let date = null;

				if (item?.last_message?.time) {
					date = new Date(item.last_message.time);
				}

				return new ChatListItem({
					isActive: false,
					avatar: item.avatar ? item.avatar && ('https://ya-praktikum.tech/api/v2/resources' + item.avatar) : 'https://64.media.tumblr.com/566faeb5cedfa26e59c4242c59cb5db4/d950528b1063571e-ee/s1280x1920/a356414c6329b368cb4536e391880471011f09f7.jpg',
					title: item.title,
					lastMessage: item.last_message ? item.last_message && item.last_message.content : '',
					lastMessageTime: date ? `${date.getHours()}:${date.getMinutes()}` : '',
					newMessage: item.unread_count,
					chatId: item.id,
				});
			});

			store.set('chats', chatsArr);
		} catch (error) {
			console.log(error.message);
		}
	}

	public async addUserToChat(data: { users: number[], chatId: string | number }) {
		try {
			const result = await this.api.addUserToChat(data);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}
			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	public async deleteUserFromChat(data: { users: number[], chatId: string | number }) {
		try {
			const result = await this.api.deleteUserFromChat(data);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}
			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	public async getChatUsers(chatId: string | number) {
		try {
			const result = await this.api.getChatUsers(chatId);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}
			return result;
		} catch (error) {
			console.log(error.message);
		}
	}

	public async getToken(chatId: number) {
		try {
			const result = await this.api.getToken(chatId);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}
			return JSON.parse(result.response);
		} catch (error) {
			console.log(error.message);
		}
	}

	public async uploadChatAvatar(data: FormData) {
		try {
			const result = await this.api.uploadChatAvatar(data);
			if (result.status !== 200) {
				throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
			}

			const activeChatAvatar = JSON.parse(result.response);

			store.set('activeChatAvatar', {
				avatar: 'https://ya-praktikum.tech/api/v2/resources' + activeChatAvatar.avatar,
			});

			return result;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default new ChatController();
