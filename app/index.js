/**
 * Created by Max on 3/10/2017.
 */
var angular = require("angular");
module.exports = function () {
	require('./core')();
	require('./shared')();
	require('./booklib')();
	var app = angular.module('booklib', [
		'ui.router',
		'booklibCore',
		'booklibShared',
		'booklibApp'
	]);
	require('./app.routes')(app);
	require('./app.component')(app);
	// angular.bootstrap(document, 'booklib');
};