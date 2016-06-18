angular.module("MyApp")

.controller("UserRowCtrl", ["$scope", function($scope) {
  $scope.user = {
    age: 40
  }
}])

.directive("userTable", function(){
  return {
    restrict: "E",
    scope: {
      users: "=",
      order: "=",
      fetch: "&"
    },
    controller: function($scope, $uibModal, UsersModel){
      $scope.delete = function (user) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'templates/delete-modal.html',
          controller: 'ModalInstanceCtrl',
          size: 'sm',
          resolve: {
            user: function () {
              return user;
            }
          }
        });

        modalInstance.result.then(function(id) {
          UsersModel.deleteUser(id)
            .then(function(){
              $scope.fetch();
            });
        }, function () {
          console.info('Modal dismissed at: ' + new Date());
        });
      };

    },
    templateUrl: "templates/user-table.html"
  }
});
