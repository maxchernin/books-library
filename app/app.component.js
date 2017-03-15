/**
 * Created by maxim.chernin on 14/3/17.
 */
/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (app) {
	var options = {
		restrict: 'E',
		bindings: {
			books: '<'
		},
		template: require('./app.html'),
		controller: 'bookLibController'
	};

	bookLibController.$inject = ['dataService'];
	function bookLibController(dataService) {
		var vm = this;
		angular.extend(vm, {
			$onInit: activate
		});

		function activate() {
			console.log(vm.books)
		}

	}

	app.controller('bookLibController', bookLibController)
		.component('bookLibrary', options);

};

// templateUrl: './app/booklib/book-library.html',