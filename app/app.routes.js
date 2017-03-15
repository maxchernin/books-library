/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (app) {
	app.config(routerConfig);

	routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
	function routerConfig($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.when('/bookLibrary', '/library');
		$urlRouterProvider.otherwise('/library'); //todo

		$stateProvider
			.state('bookLibrary', {
				url: '/library',
				template: '<nav-bar></nav-bar>' +
				'<div class="container">' +
							'<book-library books="ctrl.books"></book-library>' +
				'</div>',
				resolve: {
					booksList: getBooks
				},
				controller: function (booksList) {
					this.books = booksList
				},
				controllerAs: 'ctrl'
			});

		getBooks.$inject = ['dataService'];
		function getBooks(dataService) {
			return dataService.getBooks()
				.then(function (response) {
					console.log(response);
					return response;
				});
		}
	}
};