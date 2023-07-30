import { TState } from '../store/Store';
import store from '../store/Store';
import Message from '../../components/message/Message';

class MessageController {
	private readonly baseUrl: string;

	private socket: any;

	private userId: number;

	private chatId: number;

	private token: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async addEvents() {
		await this.socket.addEventListener('open', () => this.handleOpen);
		await this.socket.addEventListener('close', this.handleClose.bind(this));
		await this.socket.addEventListener('message', this.handleMessage);
		await this.socket.addEventListener('error', this.handleError);
	}

	public async init(userId: number, chatId: number, token: string) {
		this.userId = userId;
		this.chatId = chatId;
		this.token = token;
		this.socket = await new WebSocket(`${this.baseUrl}/${userId}/${chatId}/${token}`);
		await this.addEvents();
		console.log('соединение установлено');
		return;
	}

	public sleep(ms: number) {
		return new Promise((resolve: any) => setTimeout(resolve, ms));
	}

	public async handleOpen(message: string) {
		console.log('отправка данных');
		if (message && this.socket.readyState === 1) {
			await this.socket.send(JSON.stringify({
				content: message,
				type: 'message',
			}));

			await this.getMessages();
		} else {
			await this.sleep(1000);
			await this.handleOpen(message);
		}
	}

	public async handleClose(event: any) {
		if (event.wasClean) {
			console.log('Соединение закрыто чисто');
		} else {
			console.log('Обрыв соединения');
		}

		if (store.getState().user) {
			console.log('восстановление соединения...');
			await this.init(this.userId, this.chatId, this.token);
		}
	}

	public async handleMessage(event: any) {
		console.log('получено сообщение');
		const state: TState = store.getState();
		const data = Array.isArray(JSON.parse(event.data)) ? JSON.parse(event.data) : [JSON.parse(event.data)];

		const messagesArr = (data as any).map((item: any) => {
			const date = new Date(item.time);

			return new Message({
				time: `${date.getHours()}:${date.getMinutes()}`,
				content: item.content,
				is_read: item.is_read,
				id: item.id,
				isUserMessage: state.user!.id === item.user_id,
			});
		});

		const newMessages = JSON.parse(event.data);
		if (Array.isArray(newMessages) && newMessages.length <= 0) {
			store.set('messages', [
				new Message({
					classNames: [
						'chat__message-container_type-nomessage',
					],
					time: '',
					content: 'Сообщений пока нет',
					is_read: '',
					id: '',
					isUserMessage: false,
				}),
			]);
		} else if (Array.isArray(newMessages)) {
			store.set('messages', [...messagesArr.reverse()]);
		} else {
			store.set('messages', [...messagesArr.reverse(), ...state.messages]);
		}
	}

	public async handleError(event: any) {
		console.log('Ошибка', event.message);
	}

	public async getMessages(offset = '0') {
		if (this.socket.readyState === 1) {
			await this.socket.send(JSON.stringify({
				content: '0',
				type: 'get old',
			}));
			console.log('запрос сообщений');
		} else {
			await this.sleep(1000);
			await this.getMessages(offset);
		}
	}
}

export default new MessageController('wss://ya-praktikum.tech/ws/chats');
