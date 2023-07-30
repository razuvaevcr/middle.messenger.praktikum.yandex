import Block from '../core/eventBus/Block';


// Components
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
	classNames?: string[],
	time?: string,
	content?: string,
	is_read?: string,
	id?: string | number,
	isUserMessage?: boolean,
	text?: string,
};

type TChatItem = {
	isActive: boolean,
	avatar: string,
	title: string,
	lastMessage: string,
	lastMessageTime: string,
	newMessage: string,
	id: string,
	events?: Record<string, (event: Event) => void>,
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
		value?: string,
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
	oldPassword?: Block<TInput>,
	newPassword?: Block<TInput>,
	newPasswordAgain?: Block<TInput>,
	mainBtn?: Block<TButton>,
	secondBtn?: Block<TButton>,
	saveButton?: Block<TButton>,
	addBtn?: Block<TButton>,
	input?: Block<TInput>,
	sendBtn?: Block<TButton>,
	submitBtn?: Block<TButton>,
	optionsBtn?: Block<TButton>,
	events: Record<string, (event: Event) => void>
};

type TChat = {
	classNames: string[],
	chatName: any,
	optionsBtn?: Block<TButton>,
	optionsMenu?: Block<TBurgerMenu>,
	messageOptionsMenu?: Block<TBurgerMenu>,
	messages?: string[],
	form?: Block<TForm>,
};

type TModal = {
	classNames?: string[],
	form: Block<TForm>,
	events: Record<string,(event: Event) => void>,
};

type TBurgerMenu = {
	classNames?: string[],
	addUser?: Block<TButton>,
	removeUser?: Block<TButton>,
	removeChat?: Block<TButton>,
	events?: Record<string,(event: Event) => void>,
};

// Pages
type TEnterPage = {
	classNames: string[],
	form: Block<TForm>,
	navigation?: (data: object) => string,
};

type TErrorPage = {
	classNames: string[],
	errorNumber: string,
	subtitle: string,
	button: Block<TButton>,
};

type THomePage = {
	classNames: string[],
	profileBtn: Block<TButton>,
	search: Block<TInput>,
	addChatBtn: Block<TButton>,
	chatsList?: any,
	chats?: [],
	chat?: Block<TChat>,
	emptyChat?: string,
	// optionsMenu: Block<TBurgerMenu>,
	message?: [],
	addChatModal: Block<TModal>,
	addUserModal: Block<TModal>,
	deleteUserModal: Block<TModal>,
};

type TProfilePage = {
	classNames: string[],
	backButton: Block<TButton>,
	changeable: boolean,
	userAvatar?: string,
	userAvatarBtn?: Block<TButton>,
	userName?: string,
	changeAvatarModal?: Block<TModal>,
	user?: Record<string, any>,
	inputs?: Record<string, Record<string, string>>,
	changeDataButton?: Block<TButton>,
	changePasswordButton?: Block<TButton>,
	outButton?: Block<TButton>,
	form?: Block<TForm>,
};

type TPage = {
	layout: string,
	classNames: string[],
	backButton?: Block<TButton>,
	changeable?: boolean,
	inputs?: Record<string, Record<string, string>>,
	changeDataButton?: Block<TButton>,
	changePasswordButton?: Block<TButton>,
	outButton?: Block<TButton>,
	form?: Block<TForm>,
	profileBtn?: Block<TButton>,
	search?: Block<TInput>,
	chat?: Block<TChat>,
	emptyChat?: string, // необходим для заглушки при невыбранном чате
	errorNumber?: string,
	subtitle?: string,
	button?: Block<TButton>,
	navigation?: (data: object) => string,
}

// Utils & Other
type TRequestOptions = {
	method?: string,
    headers?: Record<string, string>,
    timeout?: number,
	withCredentials?: boolean,
    data?: any,
};

type THTTPMethod = (url: string, options?: TRequestOptions) => Promise<any>

type Indexed<T = any> = {
	[key in string]: T;
};


type TSignUpData = {
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	password: string;
	phone: string;
}

type TSignInData = {
	login: string;
	password: string;
}

type TUser = {
	id?: number;
	first_name?: string;
	second_name?: string;
	display_name?: string,
	login?: string;
	email?: string;
	phone?: string;
	avatar?: string;
}

type TChats = Record<string, TChatItem>


export {
	TButton,
	TMessage,
	TChat,
	TChatItem,
	TInput,
	TForm,
	TModal,
	TBurgerMenu,
	TEnterPage,
	TErrorPage,
	THomePage,
	TProfilePage,
	TRequestOptions,
	THTTPMethod,
	Indexed,
	TPage,
	TSignUpData,
	TSignInData,
	TUser,
	TChats,
};
