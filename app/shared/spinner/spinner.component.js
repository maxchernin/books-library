/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (shared) {

	var options = {
		restrict: 'E',
		bindings: {

		},
		template: require('./spinner.html')

	};

	navbarController.$inject = [];
	function navbarController() {
		var vm = this;
		angular.extend(vm, {
			$onInit: activate
		});

		function activate(){

		}
	}

	shared
		.controller('spinnerController', navbarController)
		.component('spinner', options)

};