/**
 * Created by terryshek on 12/3/15.
 */
var app = angular.module('app', []);
app.controller('mainCtrl', function ($scope, mainService) {
    console.log("Hello World")
    $scope.filteredList = [{title: 'clean the floor', created_at: Date()}]
    $scope.addTask = ""
    mainService.getData();
    $scope.$watch(function () {
        return mainService.taskList;
    }, function (newVal, oldVal) {
        /*...*/
        $scope.filteredList = newVal;
    }, true);
    $scope.deleteTask = function (item) {
        var index = $scope.filteredList.indexOf(item)
        mainService.taskList.splice(index, 1);
        $scope.addTask = "";
    }
    $scope.addForm = function () {
        var obj = {title: $scope.addTask, created_at: Date()}
        mainService.taskList.push(obj)
        $scope.addTask = "";
    }

})
app.service('mainService', function ($rootScope, $http) {
    var _this = {
        taskList: [],
        getData: function () {
            $http.get('/getData').success(function (res) {
                _this.taskList = res
            })
        },
        saveData: function (obj) {
            return $http.post('/saveData', obj)
        }
    }
    return _this
})