/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (shared) {

	var options = {
		restrict: 'E',
		bindings: {

		},
		template: require('./navbar.html')

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
		.controller('navbarController', navbarController)
		.component('navBar', options)

};