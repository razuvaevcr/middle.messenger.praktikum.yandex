import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
	publicDir: 'static',
	plugins: [handlebars()],
	server: {
		port: 3000,
    	open: '/messenger',
  	},
});
