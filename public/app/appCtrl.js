(function () {
    'use strict';

    angular
        .module('app')
        .controller('appCtrl', AppCtrl);

    AppCtrl.$inject = ['$q', '$http'];

    function AppCtrl($q, $http) {
        var vm = this;
        vm.workflowTitle = '';
        vm.createWorkflow = createWorkflow;

        activate();

        function activate() {
           
        }

        function createWorkflow() {
            alert(vm.workflowTitle);
            var params = {
                "title": vm.workflowTitle
            };
            // var deferred = $q.defer();
            $http.post('workflows', params)
                .success(function(data){
                    console.log(data);
                });

        }
    }
})();