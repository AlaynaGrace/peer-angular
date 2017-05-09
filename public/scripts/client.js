var myApp = angular.module('myApp', []);

myApp.controller('Controlla', function(){
  console.log('NG');

  var vm = this;
  vm.items = [];

  vm.addItems = function(){
    console.log('in addItems');
    var newItem = {
      song: vm.songIn,
      food: vm.foodIn
    };

    vm.items.push(newItem);

    vm.songIn = '';
    vm.foodIn = '';
  };
});
