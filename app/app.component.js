/**
 * Created by maxim.chernin on 14/3/17.
 */
/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (app) {
    var options = {
        restrict: 'E',
        bindings: {
            books: '<'
        },
        template: require('./app.html'),
        controller: 'bookLibController'
    };

    bookLibController.$inject = ['dataService'];

    function bookLibController(dataService) {
        var vm = this;
        angular.extend(vm, {
            $onInit: activate,
            handleAddBook: handleAddBook
        });

        function activate() {
            vm.alertStatusData = [
                {
                    status: 'disabled'
                }
            ]
        }

        function handleAddBook(inputBook) {
            _.findIndex(vm.books, function (book) {
                return book.id === inputBook.id;
            }) === -1 ? vm.books.unshift(inputBook) : toastr.error('Book already exists Try again', 'Total Failure', {
                "progressBar": true,
                "positionClass": "toast-bottom-right"
            });
        }

    }

    app.controller('bookLibController', bookLibController)
        .component('bookLibrary', options);

};

// templateUrl: './app/booklib/book-library.html',