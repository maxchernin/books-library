/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function () {
	var app = angular.module('booklibApp', []);
	require('./addBook')(app);
	require('./booksList')(app);
	require('./bookDetails')(app);

};