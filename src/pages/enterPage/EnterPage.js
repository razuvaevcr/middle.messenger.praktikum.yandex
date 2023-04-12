import logIn from '../../components/enters/logIn';
import signIn from '../../components/enters/signIn';

import './enterPage.scss'


const EnterPage = {
	render: (path) => {
		return `
		<section class="enter">
			${path == '/signin' ? signIn : logIn}
		</section>
		`;
	}
}

export default EnterPage;