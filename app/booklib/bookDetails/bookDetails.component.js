/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (app) {
	var options = {
		restrict: 'E',
		bindings: {
			bookInfo: '<',
			onClickDeleteBook: '&'
		},
		template: require('./book-details.html'),
		controller: 'bookDetailsController'
	};

	bookDetailsController.$inject = [];
	function bookDetailsController() {
		var vm = this;
		angular.extend(vm, {
			$onInit: activate,
			parseDate:parseDate,
			applyChanges:applyChanges
		});

		function activate() {
			vm.datesFormat = 'dddd, MMMM D, YYYY';
			vm.isEditMode = false;
			vm.bookInfo.published && (vm.parsedBookDate = new Date(vm.bookInfo.published));
		}

		function parseDate(inputDate, inputFormat) {
			vm.bookInfo.published = moment(inputDate).format(inputFormat);
		}

		function applyChanges() {
			parseDate(vm.parsedBookDate, vm.datesFormat);
			vm.isEditMode = false;
		}


	}

	app.controller('bookDetailsController', bookDetailsController)
		.component('bookDetails', options);

};