import Block from '../utils/eventBus/Block';


type TButton = {
	tagName: string,
	href?: string,
	classNames?: string[],
	text?: string,
	type?: string,
	settings?: { withInternalID: boolean },
	events?: Record<string, (e: Event) => void>,
};

type TMessage = {
	classNames: string[],
	text: string,
};

type TChatItem = {
	layout: string,
	isActive: boolean,
	classNames: string[],
	photo: string,
	message: Record<string, string>,
	statistics: Record<string, string>,
};

type TChatList = {
	layout: string,
	classNames: string[],
	chats: Block<TChatItem>,
};

type TInput = {
	tagName?: string,
	href?: string,
	classNames?: string[],
	label?: Record<string, string>,
	input: {
		classNames?: string[],
		name: string,
		placeholder?: string,
		type?: string,
	},
};

type TForm = {
	classNames: string[],
	changeable?: true,
	title?: string,
	email?: Block<TInput>,
	login?: Block<TInput>,
	first_name?: Block<TInput>,
	second_name?: Block<TInput>,
	display_name?: Block<TInput>,
	phone?: Block<TInput>,
	password?: Block<TInput>,
	second_password?: Block<TInput>,
	old_password?: Block<TInput>,
	new_password?: Block<TInput>,
	new_password_again?: Block<TInput>,
	mainBtn?: Block<TButton>,
	secondBtn?: Block<TButton>,
	saveButton?: Block<TButton>,
	addBtn?: Block<TButton>,
	input?: Block<TInput>,
	sendBtn?: Block<TButton>,
};

type TChat = {
	name: string,
	friendMessage: Block<TMessage>,
	userMessage: Block<TMessage>,
	form: Block<TForm>,
};

type TPage = {
	layout: string,
	classNames: string[],
	backButton?: Block<TButton>,
	changeable?: boolean,
	inputs?: {
		email?: {
			label?: string,
			input?: string,
		},
		login?: {
			label?: string,
			input?: string,
		},
		first_name?: {
			label?: string,
			input?: string,
		},
		second_name?: {
			label?: string,
			input?: string,
		},
		display_name?: {
			label?: string,
			input?: string,
		},
		phone?: {
			label?: string,
			input?: string,
		},
	},
	changeDataButton?: Block<TButton>,
	changePasswordButton?: Block<TButton>,
	outButton?: Block<TButton>,
	form?: Block<TForm>,
	profileBtn?: Block<TButton>,
	search?: Block<TInput>,
	chatsList?: Block<TChatList>,
	chat?: Block<TChat>,
	emptyChat?: string,
	errorNumber?: string,
	subtitle?: string,
	button?: Block<TButton>,
	navigation?: (data: object) => string,
};

type TRoutes = {
    path: string;
	component: Block<TPage>;
}[];

type TRequestOptions = {
	method?: string,
    headers?: Record<string, string>,
    timeout?: number,
    data?: any,
};


export {
	TButton,
	TMessage,
	TChat,
	TChatItem,
	TChatList,
	TInput,
	TForm,
	TPage,
	TRoutes,
	TRequestOptions,
};
