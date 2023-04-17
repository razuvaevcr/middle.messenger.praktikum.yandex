import Error404 from '../../components/errors/Error404';
import Error500 from '../../components/errors/Error500';

import './errorPage.scss'


const ErrorPage = {
	render: (path) => {
		return `
			<section class="error">
				${path === '/error500' ? Error500 : Error404}
			</section>
		`;
	}
}

export default ErrorPage;
