const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<html><body><main id="root"></main></html>', {
	url: 'http://localhost:3000',
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

// eslint-disable-next-line func-names
require.extensions['.scss'] = function () { return null; };
