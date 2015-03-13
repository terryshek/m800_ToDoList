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
        var id = item._id
        console.log(id)
        mainService.deleteTask(id)
        mainService.getData();
    }
    $scope.addForm = function () {
        var obj = {title: $scope.addTask}
        mainService.addData(obj);
        mainService.getData();
    }
    $scope.getDisplayTime = function(time){
        return moment(time).format('DD MMM YYYY HH:mm');
    };

})
app.service('mainService', function ($rootScope, $http) {
    var _this = {
        taskList: [],
        getData: function () {
            $http.get('/getData').success(function (res) {
                console.log(res)
                _this.taskList = res
            })
        },
        saveData: function () {
            return $http.post('/saveData', _this.taskList)
        },
        addData:function(obj){
            return $http.post('/addData', obj)
        },
        deleteTask:function(id){
            console.log(id)
            return $http.delete("/deleteTask/"+id)
        }
    }
    return _this
})
