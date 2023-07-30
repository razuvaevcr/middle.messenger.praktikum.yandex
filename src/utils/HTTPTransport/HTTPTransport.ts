import queryStringify from './queryStringify';
import { TRequestOptions, THTTPMethod } from '../../types/types';


const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

class HTTPTransport {
	static API_URL = 'https://ya-praktikum.tech/api/v2';

	protected baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = `${HTTPTransport.API_URL}${baseURL}`;
	}

	public get: THTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

	public post: THTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

	public put: THTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

	public delete: THTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

	request = (url: string, options: TRequestOptions, timeout = 5000) => {
		const { headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  }, method, data } = options;

		//   console.log(options);

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
				isGet && !!data ? `${this.baseURL}${url}${queryStringify(data)}` : `${this.baseURL}${url}`,
			);

			if (options.withCredentials) {
				xhr.withCredentials = true;
			}

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
