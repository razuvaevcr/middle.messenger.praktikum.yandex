import LogIn from '../../components/logIn/LogIn';
import SignIn from '../../components/signIn/SignIn';
import navigation from '../../components/navigation/navigation';

import './enterPage.scss';


const EnterPage = {
	render: (path) => {
		return `
		${path == '/signin' ? '' : navigation}
		<section class="enter">
			${path == '/signin' ? SignIn : LogIn}
		</section>
		`;
	}
}

export default EnterPage;
