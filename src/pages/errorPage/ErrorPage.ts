import Page from '../Page';
import { error404Btn, error500Btn } from '../../components/button';
import errorTmp from './tmp';

import './errorPage.scss';


const Error404Page = new Page({
	layout: errorTmp,
	classNames: [
		'error',
	],
	errorNumber: '404',
	subtitle: 'Не туда попали',
	button: error404Btn,
});

const Error500Page = new Page({
	layout: errorTmp,
	classNames: [
		'error',
	],
	errorNumber: '500',
	subtitle: 'Мы уже фиксим',
	button: error500Btn,
});


export {
	Error404Page,
	Error500Page,
};
