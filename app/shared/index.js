/**
 * Created by Max on 3/10/2017.
 */
module.exports = function () {
	var shared = angular.module('booklibShared', []);
	require('./navbar')(shared)
};