/**
 * Created by maxim.chernin on 16/3/17.
 */
module.exports = function (app) {

	var options = {
		restrict :'E',
		bindings:{
			onClickAddButton: '&'
		},
		template: require('./add-book.html'),
		controller: 'addBookController'
	};

	addBookController.$inject = [];
	function addBookController() {
		var vm = this;
		angular.extend(vm, {
			$onInit: activate,
			addBook: addBook
		});

		function activate() {
			vm.invalidForm = false;
			vm.publishDate = new Date();
			vm.bookObj = {
				title: undefined,
				author: {
					first: undefined,
					last: undefined
				},
				published: undefined,
				about: "",
				picture: 'http://loremflickr.com/320/240?random=2'
			}
			vm.bookInfo = angular.copy(vm.bookObj);
		}

		function addBook(form) {
			try {
			vm.bookInfo.id = Math.floor((Math.random() * 12313211310) + 1);
			vm.bookInfo.published = moment(vm.publishDate).format('dddd, MMMM D, YYYY');
			vm.bookInfo.picture = angular.copy(vm.bookObj.picture);

			_.forEach(vm.bookInfo, function (value, key) {
				if(key != 'about'){
					if(_.isObject(value)){
						var keys = Object.keys(value);
						if(keys.length){
							_.forEach(keys, function (keyValue) {
								value[keyValue] === undefined && (vm.invalidForm = true);
							})
						}
					}
					(value === undefined) && (vm.invalidForm = true);

				}

			});

			if(!form.$invalid && !vm.invalidForm ){
				vm.onClickAddButton({inputBook: vm.bookInfo}) && (vm.bookInfo={})
			} else {
				toastr.error('Please fill required fields', 'Total Failure', {"progressBar": true,
					"positionClass": "toast-bottom-right"});
				vm.invalidForm = false; //restarting
			}
			} catch (err){
				console.error(err);
			}

		}

	};

	app
		.controller('addBookController', addBookController)
		.component('addBook', options)
};