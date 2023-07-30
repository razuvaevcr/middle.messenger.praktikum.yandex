import Block from '../eventBus/Block';
import Route from './route';


class Router {
	static __instance: Router;

	public routes: Route[];

	public history: History;

	private _currentRoute: Route | null;

	private _rootQuery: string;

	constructor(rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		Router.__instance = this;
	}

	public use(pathname: string, block: typeof Block) {
		const route = new Route(pathname, block, { rootQuery: this._rootQuery });
		this.routes.push(route);

		return this;
	}

	public start() {
		window.onpopstate = (() => {
			this._onRoute(window.location.pathname);
		}).bind(this);

		this._onRoute(window.location.pathname);
	}

	private _onRoute(pathname: string) {
		const route = this.getRoute(pathname);

		if (!route) {
			return;
		}

		if (this._currentRoute && this._currentRoute !== route) {
			this._currentRoute.leave();
		}

		this._currentRoute = route;
		route.render();
	}

	public go(pathname: string) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	public back() {
		this.history.back();
	}

	public forward() {
		this.history.forward();
	}

	public getRoute(pathname: string) {
		return this.routes.find((route) => route.match(pathname));
	}
}

const router = new Router('#root');

export default router;
