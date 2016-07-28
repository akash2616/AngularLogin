/**
 * Created by mohitea on 20/06/16.
 */
app.directive("registerFormValidator", function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'
        },
        //controller: controllerFunction, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { debugger;} //DOM manipulation
    }
});