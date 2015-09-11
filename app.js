var recollection = angular.module('recollection',['ngRoute']);

recollection.config(function($routeProvider) {
		$routeProvider

    //route for home page
		.when('/', {
			template:'views/home.html',
			controller  : 'mainController'
    })
		.when('/login' , {
    template: 'views/login.html',
    controller : 'LoginCtrl'
  		})
     .when('/signup', {
  	template: 'views/signup.html',
    		controller: 'signupController'
 	 })
  	.when('/progress', {
  	template:'views/progress.html',
  	controller:'progressController'
  })
  .when('/questions', {
  	template:'views/questions.html',
  	controller:'questionsController'
  		});
    });
   recollection.controller('mainController',function($scope){
    $scope.message = "does this work?" ;
   });
   recollection.controller('loginController', function($scope){
     
   });
   recollection.controller('signupController', function($scope){
     
   });
    recollection.controller('progressController', function($scope){
     
   });
     recollection.controller('questionsController', function($scope){
     
   });
      
