import queryStringify from './queryStringify';
import { TRequestOptions } from '../../types/types';


const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

class HTTPTransport {
	public get = (url: string, options: TRequestOptions = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

	public post = (url: string, options: TRequestOptions = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

	public put = (url: string, options: TRequestOptions = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

	public delete = (url: string, options: TRequestOptions = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

	request = (url: string, options: TRequestOptions, timeout = 5000) => {
		const { headers = {}, method, data } = options;

		return new Promise((resolve, reject) => {
			if (!method) {
				// eslint-disable-next-line prefer-promise-reject-errors
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

			xhr.open(
				method,
				isGet && !!data ? `${url}${queryStringify(data)}` : url,
			);

			Object.keys(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = () => {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			if (isGet || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	};
}


export default HTTPTransport;
