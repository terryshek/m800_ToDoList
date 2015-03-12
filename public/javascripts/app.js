/**
 * Created by terryshek on 12/3/15.
 */
var app = angular.module('app', []);
app.controller('mainCtrl', function($scope,mainService){
    console.log("Hello World")
    $scope.filteredList=[{title:'clean the floor', created_at:Date()}]
    $scope.taskName = ""
    mainService.getData().then(function(res){
        console.log(res.data)

    })
    $scope.addForm = function(){
        console.log($scope.taskName)
    }

})
app.service('mainService', function($rootScope, $http){
    var _this ={
        getData:function(){
            return $http.get('/getData')
        }
    }
    return _this
})