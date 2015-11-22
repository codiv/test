var app=angular.module("myapp.controller",[]);

app.controller("indexMain",function($scope,$http,$state,$ionicSlideBoxDelegate){
	$scope.banner=[];
	$http({
		method:"GET",
		url:"http://m2.cosjii.com/Index/GetIndexSlides?_ajax_=1"
	}).success(function(data){
		if (data.error==0) {
			//JSON.stringify()用来将对象序列化为JSON字符串
			//JSON.parse() 用来将JSON数据解析为js对象
			window.localStorage["bannerImg2"] = JSON.stringify(data.list);
			$scope.banner = JSON.parse(window.localStorage.bannerImg);
			window.localStorage.removeItem("bannerImg2")
			console.log(window.localStorage)
			$ionicSlideBoxDelegate.update();//update()重新调整参数
		};
		// $scope.banner = data.list;
	}).error(function(){
		console.log(data);
	})
})