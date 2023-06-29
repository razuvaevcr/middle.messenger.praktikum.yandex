import Page from '../Page';
import { logInForm, signInForm } from '../../components/form';
import navigation from '../../components/navigation/navigation';
import enterTmp from './tmp';

import './enterPage.scss';


const LogInPage = new Page({
	layout: enterTmp,
	classNames: [
		'enter',
	],
	form: logInForm,
	navigation,
});

const SignInPage = new Page({
	layout: enterTmp,
	classNames: [
		'enter',
	],
	form: signInForm,
});


export {
	LogInPage,
	SignInPage,
};
