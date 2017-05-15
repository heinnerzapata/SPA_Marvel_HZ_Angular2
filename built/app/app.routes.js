System.register(['@angular/router', './views/test/test.component', './views/test2/test2.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, test_component_1, test2_component_1;
    var Router, routes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (test2_component_1_1) {
                test2_component_1 = test2_component_1_1;
            }],
        execute: function() {
            Router = [
                { path: '', redirectTo: 'test', pathMatch: 'full' },
                { path: 'test', component: test_component_1.TestComponent },
                { path: 'test2', component: test2_component_1.Test2Component }
            ];
            exports_1("routes", routes = router_1.RouterModule.forRoot(Router));
        }
    }
});
