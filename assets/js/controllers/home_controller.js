cycleApp.controller('homeCtrl', function($scope){

  console.log("homeCtrl linked");

  $scope.signUpModal = true;
  $scope.signUp = function(){
    console.log('signup click');
    $scope.signUpModal = false;
  };

  $scope.closeSignUp = function(){
    console.log('close signup');
    $scope.signUpModal = true;
  }

  $scope.logInModal = true;
  $scope.logIn = function(){
    console.log('login click');
    $scope.logInModal = false;
  }

  $scope.closeLogIn = function(){
    console.log('close login');
    $scope.logInModal = true;
  }

});
