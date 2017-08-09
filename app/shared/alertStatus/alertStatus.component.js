/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (shared) {

    var options = {
        restrict: 'E',
        bindings: {

        },
        template: require('./alertStatus.html')

    };

    alertStatusController.$inject = [];
    function alertStatusController() {
        var vm = this;
        angular.extend(vm, {
            $onInit: activate
        });

        function activate(){

        }
    }

    shared
        .controller('alertStatusController', alertStatusController)
        .component('alertStatus', options)

};