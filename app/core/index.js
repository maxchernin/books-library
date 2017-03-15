/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function () {
	var core = angular.module('booklibCore', []);
	require('./dataService')(core);
};