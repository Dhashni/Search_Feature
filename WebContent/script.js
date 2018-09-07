/**
 * Created by Dhashni Thiagarajan
 */
var app = angular.module('myApp' ,[]);

app.controller("MainCtrl", function($scope){

    $scope.people = [
        {
            name:'Dhashni Thiagarajan'
        },
        {
            name:'Thiagarajan duraisamy'
        },
        {
            name:'Vigna Thiagarajan'
        },
        {
        	name:'Shanthi Panikamuthu'
        }
        
    ]



});