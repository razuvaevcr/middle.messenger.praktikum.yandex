import Block from '../block/Block';


function renderDOM(query: string, block: Block<Record<string, unknown>>) {
	const root = document.querySelector(query);
	block.dispatchComponentDidMount();

	if (!root) {
		return;
	}

	root.appendChild(block.getContent());
}


export default renderDOM;
