import Block from './Block';
import { assert } from 'chai';
import cloneDeep from '../../utils/cloneDeep/cloneDeep';


class SomeComponent extends Block<any> {
	constructor(props: any) {
		super(props.tagName, props);
	}

	render(): DocumentFragment {
		return this.compile('<div>{{props}}</div>', this.props);
	}
}

const block = new SomeComponent({ props: 'second props' });

describe('Block', () => {
	before(() => {
		block.setProps({ props: 'init' });
	});

	it('render returns valid textContent', () => {
		assert.equal(block.getContent().textContent, 'init');
	});

	it('setProps works correctly by changing props', () => {
		const oldProps = cloneDeep(block.props) as any;
		block.setProps({ props: 'second setProps' });
		assert.notEqual(block.props.props, oldProps.props);
	});

	it('setProps calls render when props change', () => {
		block.setProps({ props: 'isNotEqual' });
		assert.equal(block.getContent().textContent, 'isNotEqual');
	});
});
