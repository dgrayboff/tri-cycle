cycleApp.controller('homeCtrl', function($scope){

  console.log("homeCtrl linked");

  // angular.element(document).ready(function () {
    var h1Load = angular.element( document.querySelector( 'h1' ) );
    h1Load.addClass('animated fadeInLeft');
    var h2Load = angular.element( document.querySelector( '.welcome' ) );
    h2Load.addClass('animated fadeIn');
    var h3Load = angular.element( document.querySelector( '.header-about' ) );
    h3Load.addClass('animated fadeIn');
    // });

  // SIGN UP/REGISTER //
  $scope.signUpModal = true;
  $scope.signUp = function(){
    console.log('signup click');
    $scope.signUpModal = false;
  };

  $scope.closeSignUp = function(){
    console.log('close signup');
    $scope.signUpModal = true;
  }

  $scope.signUpSubmit = function(){
    console.log('register submit');
    var userRegister = {
      'username': $scope.registerUsername,
      'email': $scope.registerEmail,
      'emailConfirm': $scope.registerEmailConfirm,
      'password': $scope.registerPassword,
      'passwordConfirm': $scope.registerPasswordConfirm
    }
    console.log(userRegister);
  }
  ///


  // LOG IN //
  $scope.logInModal = true;
  $scope.logIn = function(){
    console.log('login click');
    $scope.logInModal = false;
  }

  $scope.closeLogIn = function(){
    console.log('close login');
    $scope.logInModal = true;
  }

  $scope.logInSubmit = function(){
    console.log('log in submit');
    var userLogin = {
      'email': $scope.loginUsername,
      'password': $scope.loginPassword
    }
    console.log(userLogin);
  }
  ///




});
