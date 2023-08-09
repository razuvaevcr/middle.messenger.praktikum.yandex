import { expect } from 'chai';
import sinon from 'sinon';
import router from './router';
import LogInPage from '../../pages/enterPage/LogInPage';
import Error404Page from '../../pages/errorPage/Error404Page';


describe('Router', () => {
	router
		.use('/', LogInPage)
		.use('/error404', Error404Page)
		.start();

	it('Page transition should change state of history entity', () => {
		router.go('/');
		router.go('/error404');
		expect(router.history.length).to.eq(3);
	});

	it('Transition to a non-existent page should redirect and change state of the history entity', () => {
		router.go('/error500');
		expect(router.history.length).to.eq(5);
	});

	it('Routs amount', () => {
		router.go('/');
		router.go('/error404');
		expect(router.routes.length).to.eq(2);
	});

	it('"Back" transition should change state of history entity', () => {
		const backSpy = sinon.spy(window.history, 'back');
		router.back();
		expect(backSpy.callCount).to.eq(1);
	});

	it('"Forward" transition should change state of history entity', () => {
		const forwardSpy = sinon.spy(window.history, 'forward');
		router.forward();
		expect(forwardSpy.callCount).to.eq(1);
	});

	it('The Route must be in an array of routes', () => {
		const route = router.getRoute('/error404');
		expect(route).to.not.be.undefined;
	});
});
