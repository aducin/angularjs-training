angular.module("MyApp", [
  'ui.bootstrap',
  'ui.router',
  'cgBusy'
])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('home', {
    url: "/home",
    views: {
      'main': {
        templateUrl: "templates/hello.html",
        controller: "HelloCtrl"
      }
    },
    onEnter: function () {
      console.log("entered home state");
    }
  });

  $stateProvider.state('contact', {
    url: "/contact",
    views: {
      'main': {
        templateUrl: "templates/contact.html"
      }
    },
    onEnter: function () {
      console.log("entered contact state");
    }
  });

  $stateProvider.state('users', {
    url: "/users",
    views: {
      'main': {
        templateUrl: "templates/users.html",
        controller: "UsersCtrl"
      }
    },
    onEnter: function () {
      console.log("entered users state");
    }
  });

}])

.run(function(){
  console.log("inside run");
})

.constant("baseURL", "http://localhost:3000/")

.filter("shorten", function(){
  return function shorten(text, length){
    length = length || 20;
    return text.length > length ?
    text.substr(0, length) + "..." :
      text;
  };
})

.provider('Number', function() {
  this.base = 10;

  this.$get = function() {
    var base = this.base;
    return {
      calculate: function(x) {
        return Number(x).toString(base);
      }
    }
  };

  this.setBase = function(base){
    this.base = base;
  }
})

.config(function(NumberProvider){
  NumberProvider.setBase(6);
})

;
