var app  = angular.module('hackApp', []);

app.controller('noteCtrl',['$scope',

function($scope){
  $scope.bank = [];
   
  $scope.addNote = function(){
    //store all my yabadaba do in an array
     $scope.bank.push($scope.note.data);
   }; 
  $scope.removeNote = function(n){
    //slice of the right bacon stripe 
     $scope.bank.splice(n,1);
  }; 
  $scope.resetform = function(){
    // make a brand new baby form 
     $scope.note.data = [];
  };
  
 }]);