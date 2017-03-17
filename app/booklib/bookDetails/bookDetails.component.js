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

	bookDetailsController.$inject = ['$scope'];
	function bookDetailsController($scope) {
		var vm = this;
		angular.extend(vm, {
			$onInit: activate,
			validateField:validateField,
			parseDate:parseDate,
			applyChanges:applyChanges
		});

		function activate() {
			vm.invalidForm = false;
			vm.datesFormat = 'dddd, MMMM D, YYYY';
			vm.isEditMode = false;
			vm.bookInfo.published && (vm.parsedBookDate = new Date(vm.bookInfo.published));
		}

		function parseDate(inputDate, inputFormat) {
			vm.bookInfo.published = moment(inputDate).format(inputFormat);
		}

		function applyChanges() {
			parseDate(vm.parsedBookDate, vm.datesFormat);
			!vm.invalidForm ? (vm.isEditMode = false) : toastr.error('Please fix invalid field', 'Error', {"progressBar": true,
					"positionClass": "toast-bottom-right"});
		}

		function validateField(input) {
			input.$invalid && (vm.invalidForm = true);
		}

	}

	app.controller('bookDetailsController', bookDetailsController)
		.component('bookDetails', options);

};