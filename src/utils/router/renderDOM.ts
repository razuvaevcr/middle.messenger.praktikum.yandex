import Block from '../eventBus/Block';
import { TPage } from '../../types/types';

function renderDOM(query: string, block: Block<TPage>) {
	const root = document.querySelector(query);

	if (!root) {
		return;
	}

	root.appendChild(block.getContent());
}


export default renderDOM;
