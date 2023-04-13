import logIn from '../../components/enters/logIn';
import signIn from '../../components/enters/signIn';
import navigation from '../../components/navigation/navigation';

import './enterPage.scss'


const EnterPage = {
	render: (path) => {
		return `
		${navigation}
		<section class="enter">
			${path == '/signin' ? signIn : logIn}
		</section>
		`;
	}
}

export default EnterPage;