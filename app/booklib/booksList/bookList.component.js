/**
 * Created by maxim.chernin on 14/3/17.
 */
// var _ = require('lodash');
// var toastr = require('toastr');
module.exports = function (app) {
	var options = {
		restrict: 'E',
		bindings: {
		books: '<'
		},
		template: require('./book-list.html'),
		controller: 'bookListController'
	};

	bookListController.$inject = [];
	function bookListController() {
		var vm = this;
		angular.extend(vm, {
			$onInit: activate,
			deleteBookHandler: deleteBookHandler
		});

		function activate() {

		}

		function deleteBookHandler(bookId) {
			var resultIndex;
			toastr.options = {
				"closeButton": false,
				"debug": false,
				"newestOnTop": false,
				"progressBar": false,
				"positionClass": "toast-bottom-full-width",
				"preventDuplicates": false,
				"onclick": null,
				"showDuration": "300",
				"hideDuration": "1000",
				"timeOut": "5000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			};
			resultIndex = _.findIndex(vm.books, function (book) {
				return book.id === bookId;
			});
				vm.books.splice(resultIndex, 1) && $('#' + bookId).modal('hide');

			toastr.options = {
				"closeButton": false,
				"debug": false,
				"newestOnTop": true,
				"progressBar": true,
				"positionClass": "toast-bottom-right",
				"preventDuplicates": true,
				"onclick": null,
				"showDuration": "300",
				"hideDuration": "1000",
				"timeOut": "5000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			};
			var msg = "Book " + vm.books[resultIndex].title + " successfully deleted";
			setTimeout(function () {
				toastr.success(msg, 'Great Success');
			}, 500);
			//todo add a request to webapi to delete the book from list

		}
	}

	app.controller('bookListController', bookListController)
		.component('bookList', options);

};