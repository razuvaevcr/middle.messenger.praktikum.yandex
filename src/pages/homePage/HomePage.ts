import Page from '../Page';
import chatsList from '../../components/chatsList';
import { chat, emptyChat } from '../../components/chat';
import { chatsListProfileBtn } from '../../components/button';
import { chatsSearchInput } from '../../components/input';
import homePageTmp from './tmp';

import './homePage.scss';


const HomePage = new Page({
	layout: homePageTmp,
	classNames: [
		'home',
	],
	profileBtn: chatsListProfileBtn,
	search: chatsSearchInput,
	chatsList,
	chat,
	emptyChat, // необходим для заглушки при невыбранном чате
});


export default HomePage;
