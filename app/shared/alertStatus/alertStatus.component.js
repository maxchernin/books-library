/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (shared) {

    var options = {
        bindings: {
            data: '<',
            position: '@',
            icon: '@',
            infoIcon: '@'
        },
        template:
        '<div class="alert-status" ng-class="::$ctrl.getContainerClasses();">' +
        '<i class="icon icon-Box enlarge">' +
        '<i class="icon inner-icon icon-Round-Transperancy"></i>' +
        '<i class="icon inner-icon icon-pendingApproval"></i>' +
        '</i>' +
        '<div>' +
        '<span class="text">{{$ctrl.text}} {{$ctrl.data.status}}</span>' +
        '<i class="icon icon-Info"></i>' +
        '</div>' +
        '</div>',
        controller: 'alertStatusController'
    };

    alertStatusController.$inject = [];

    function alertStatusController() {
        var vm = this;
        angular.extend(vm, {
            $onInit: activate,
            $onChanges: onChanges,
            getContainerClasses: getContainerClasses
        });

        function activate() {
            vm.text = "Incident initiation is";
            vm.defaults = {
                position: 'top right' //needs default icons
            };
            console.log(vm.data);
        }

        function getContainerClasses() {
            var containerClass;
            vm.position ? (containerClass = vm.position) : (containerClass = vm.defaults.position);
            vm.data.status && (containerClass += ' ' + vm.data.status);
            return containerClass;
        }

        function onChanges(prev, curr) {
            console.log('prev', prev);
            console.log(curr);
        }
    }


    shared
        .controller('alertStatusController', alertStatusController)
        .component('alertStatus', options);

};