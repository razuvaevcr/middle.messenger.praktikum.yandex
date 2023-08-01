import { TState } from '../../types/types';

function mapStateToProps(state: TState) {
	return { ...state.user, /* avatar: state.user!.avatar, */ chats: state.chats, messages: state.messages, activeChat: state.activeChat };
}

export default mapStateToProps;
