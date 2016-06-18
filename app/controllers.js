angular.module("MyApp")

.controller("HelloCtrl", ["$scope", "Number", function($scope, Number) {
  $scope.name = "Lucy";
  $scope.value = Number.calculate(23453);
}])

.controller("UsersCtrl", ["$scope", "UsersModel", function($scope, UsersModel) {
  $scope.order = '';

  $scope.fetch = function(){
    $scope.collectionPromise = UsersModel.getCollection() // getUser(2)
    .then(function(response){
      $scope.users = response.data;
    });
  };
}])

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, user) {
  $scope.user = user;

  $scope.ok = function () {
    $uibModalInstance.close($scope.user.id);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
