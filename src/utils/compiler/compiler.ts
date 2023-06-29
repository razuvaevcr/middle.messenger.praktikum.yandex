import Handlebars from 'handlebars';


const Compiler = (layout: string, props: { [x: string]: unknown; }): string => {
	const template = Handlebars.compile(layout);

	return template(props);
};


export default Compiler;
