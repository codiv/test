var app=angular.module("myapp",["ionic","myapp.controller"]);

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
	$urlRouterProvider.otherwise("/index");
	$stateProvider
	.state("index",{
		url:"/index",
		views:{
			"":{
				templateUrl:"template/index.html",
				controller:"indexMain"
			},
			"main@index":{
				templateUrl:"template/main.html"
			},
			"sider@index":{
				templateUrl:"template/sider.html"
			}
		}
	})
})