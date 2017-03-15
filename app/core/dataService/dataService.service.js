/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (core) {
 'use strict';
	dataService.$inject = ['$q', '$http'];

	function dataService($q, $http) {
		var self = this;
		angular.extend(self, {
			getBooks: getBooks
		});
		activate();

		function activate() {
			self.HTTP_METHODS = {
				GET: 'GET',
				POST: 'POST',
				PUT: 'PUT',
				DELETE: 'DELETE',
			};
			console.log('welcome');
		}

		function getBooks() {
			var request = {
						url: 'app/lib/books.json',
						method: 'GET'
					};
			return $http.get(request.url);
		}
	}

	core.service('dataService', dataService)
};