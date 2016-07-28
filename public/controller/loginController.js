/**
 * Created by mohitea on 13/06/16.
 */
app.controller('loginController', function($rootScope,$scope,$http,$location) {

    $scope.createUser = function(){
        $location.path("/registerUser");
    },
    $scope.registerUser = function(){
        $http({
            method  : 'post',
            url     : '/register',
            data    : {my: "data"},
            headers : {'Content-Type': 'application/json'}
        }).then(function(data) {
            if (data.status === 200) {
                alert('success')
            } else {
                alert('error')
            }
        });
    }
});