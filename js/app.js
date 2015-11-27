var app=angular.module("myapp",["ionic","myapp.controller","myapp.services"]);

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
			}
		}
	})
	.state("index.item",{
		url:"/item",
		views:{
			"main@index":{
				templateUrl:"template/item/item.html",
				controller:"goItem"
			}
		}
	})
})