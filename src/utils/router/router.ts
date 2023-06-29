import { Error404Page } from '../../pages/errorPage/ErrorPage';
import renderDOM from './renderDOM';

import { TRoutes } from '../../types/types';


const router = (routes: TRoutes) => {
	const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
	// eslint-disable-next-line no-shadow
	const findComponentByPath = (path: string, routes: TRoutes) => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;


	const routerRender = () => {
		const path = parseLocation();

		const { component = Error404Page } = findComponentByPath(path, routes) || {};
		document.querySelector('#root')!.innerHTML = '';

		renderDOM('#root', component);
	};

	window.addEventListener('hashchange', routerRender);
	window.addEventListener('load', routerRender);
};


export default router;
