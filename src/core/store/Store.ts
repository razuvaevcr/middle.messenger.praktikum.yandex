import EventBus from '../eventBus/EventBus';
import Block from '../eventBus/Block';
import { TState } from '../../types/types';
import set from '../../utils/set/set';


enum StoreEvents {
	Updated = 'updated',
}

class Store extends EventBus {
	private state: TState = {};

	public getState() {
		return this.state;
	}

	public set(path: string, value: unknown) {
		set(this.state, path, value);

		this.emit(StoreEvents.Updated, this.state);
	}
}

const store = new Store();

const withStore = (mapStateToProps: (state: Record<string, unknown>) => Record<string, unknown>) => (Component: typeof Block) => class extends Component<Record<string, unknown>> {
	constructor(props : any) {
		super({ ...props, ...mapStateToProps(store.getState()) }, {});

		store.on(StoreEvents.Updated, () => {
			this.setProps({ ...mapStateToProps(store.getState()) });
		});
	}
};


export default store;
export { withStore };
