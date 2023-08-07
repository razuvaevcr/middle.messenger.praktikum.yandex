import { expect } from 'chai';
import sinon from 'sinon';
import HTTPTransport from './HTTPTransport';
// import { TSignInData } from '../../types/types';


describe('HTTPTransport', () => {
	let xhr: sinon.SinonFakeXMLHttpRequestStatic;
	let instance: HTTPTransport;
	const requests: sinon.SinonFakeXMLHttpRequest[] = [];

	beforeEach(() => {
		xhr = sinon.useFakeXMLHttpRequest();

		// @ts-ignore
		global.XMLHttpRequest = xhr;

		xhr.onCreate = ((request: sinon.SinonFakeXMLHttpRequest) => {
			requests.push(request);
		});

		instance = new HTTPTransport('/auth');
	});

	afterEach(() => {
		requests.length = 0;
	});

	it('.get() should send GET request', () => {
		instance.get('/user');

		const [request] = requests;

		expect(request.method).to.eq('GET');
	});
	it('.put() should send PUT request', () => {
		instance.put('/chats/users');

		const [request] = requests;

		expect(request.method).to.eq('PUT');
	});
	it('.post() should send POST request', () => {
		instance.post('/chats');

		const [request] = requests;

		expect(request.method).to.eq('POST');
	});
	it('.delete() should send DELETE request', () => {
		instance.delete('/chats/users');

		const [request] = requests;

		expect(request.method).to.eq('DELETE');
	});
});
