var config = {
    apiKey: "AIzaSyBhecOkoO6wT4DTR735Czdfo0W6PIsbmQo",
    authDomain: "cv-angular.firebaseapp.com",
    databaseURL: "https://cv-angular.firebaseio.com",
    storageBucket: "cv-angular.appspot.com",
    messagingSenderId: "506456923015"
  };
  firebase.initializeApp(config);

var app= angular.module("sampleApp", ["ngRoute","firebase","app.controller"])
    .config(["$routeProvider", function($routeProvider){
      $routeProvider.when("/",{
        templateUrl:"pages/post.html",
        controller:'PostController'
      }).when("/post/:id",{
        templateUrl:"pages/postSimple.html",
        controller:"SimplePostController"
      })
      .otherwise({
        redirectTo:"/"
      });
    }]);

  app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});
