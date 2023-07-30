import { TState } from '../../core/store/Store';

function mapStateToProps(state: TState) {
	return { ...state.user, chats: state.chats, messages: state.messages };
}

export default mapStateToProps;
