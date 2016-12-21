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
        vm.getWorkflowInstance = getWorkflowInstance;
        vm.createdWorkflows = [];
        vm.workflowInstances = [];
        vm.showDefinition = false;
        vm.showTheDefinition = showTheDefinition;

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

        function getWorkflowInstance() {

            $http.get('workflows/' + vm.workflowTitle, {})
                .success(function(data){
                    vm.workflowInstances.push(data);
                    vm.workflowTitle = '';
                });
        }

        function showTheDefinition() {
            vm.showDefinition = true;
            $http.get('workflowsDefinitions/' + vm.workflowInstances[0].workflowDefinition.id, {})
                .success(function(data){
                    console.log(data);
                    vm.workflowDefinition = data;
                });
        }
    }
})();