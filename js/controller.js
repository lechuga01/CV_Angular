angular.module('app.controller',['firebase','app.directives','ngSanitize'])
  .controller('PostController',  function($scope, $firebaseArray){
    var ref = firebase.database().ref().child('Lista');
    $scope.datosLista=$firebaseArray(ref);
  })
  .controller('SimplePostController',function($scope,$firebaseObject,$routeParams){
    var ref = firebase.database().ref().child('Lista').child($routeParams.id);
    var refvalor=firebase.database().ref().child('Lista').child($routeParams.id).child('valores');
    $scope.publicaciones =$firebaseObject(ref);
    $scope.valores=$firebaseObject(refvalor);
  });
