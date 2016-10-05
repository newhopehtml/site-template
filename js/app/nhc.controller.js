(function () {

    angular.module('nhc')
        .controller('NHCController', NHCController);


    NHCController.$inject = ['$location','NHCService'];
    function NHCController($location, NHCService) {
        var nhc = this;
    }
})();
