const router = (routes) => {
	
	const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
	const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
	
	const router = () => {
		const path = parseLocation();
		const { component = ErrorPage } = findComponentByPath(path, routes) || {};
		document.querySelector("#root").innerHTML = component.render(path);
	};
	
	window.addEventListener('hashchange', router);
	window.addEventListener('load', router);
}


export default router;