var myApp = angular.module('myApp', []);

myApp.controller('Controlla', function($http){
  console.log('NG');

  var vm = this;

  vm.addItems = function(){
    console.log('in addItems');
    var newItem = {
      song: vm.songIn,
      food: vm.foodIn
    };

    console.log(newItem);
    $http({
      method: 'POST',
      url: '/test',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: "message=" + vm.songIn + ',' + vm.foodIn
    }).then(function success(response){
      console.log(response.data);
    });

    $http({
      method: 'GET',
      url: '/test'
    }).then(function mySuccess(response){
      vm.items = response.data;
      console.log(vm.items);
    });


    vm.songIn = '';
    vm.foodIn = '';
  };

});
