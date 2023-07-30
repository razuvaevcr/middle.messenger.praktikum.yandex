import HTTPTransport from '../../utils/HTTPTransport/HTTPTransport';


abstract class BaseAPI {
	protected http: HTTPTransport;

	protected constructor(endpoint: string) {
		this.http = new HTTPTransport(endpoint);
	}
}

export default BaseAPI;
