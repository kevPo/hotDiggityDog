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
        vm.createdWorkflows = [];

        activate();

        function activate() {
           
        }

        function createWorkflow() {
            
            var params = {
                "title": vm.workflowTitle
            };

            $http.post('workflows', params)
                .success(function(data){
                    vm.createdWorkflows.push({
                        name: data.title,
                        url: 'http://localhost:49339/Workflow/WorkflowDefinition.aspx?defid='+ data.id
                    });
                    vm.workflowTitle = '';
                });

        }
    }
})();