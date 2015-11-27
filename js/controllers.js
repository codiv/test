var app=angular.module("myapp.controller",[]);

app.controller("indexMain",function($scope,$http,$state,$ionicSlideBoxDelegate,$ionicHistory,userInfo){
	$scope.banner=[];
	$http({
		method:"GET",
		url:"data/GetIndexSlides.json"
	}).success(function(data){
		if (data.error==0) {
			//JSON.stringify()用来将对象序列化为JSON字符串
			//JSON.parse() 用来将JSON数据解析为js对象
			userInfo.addLong('bannerImg', JSON.stringify(data.list));
			$scope.banner = JSON.parse(userInfo.wl.bannerImg);
			$ionicSlideBoxDelegate.update();//update()重新调整参数
		};
	}).error(function(){
		console.log(data);
	});
	$scope.backGo = function() {
		$ionicHistory.goBack();
	};
	$scope.goItem=function(a){
		var obj = document.getElementById('co-item');
		obj.style.webkitTransform = 'translateX(-'+ 16*parseInt(a) +'rem)' + 'translateZ(0)';
		obj.style.transform = 'translateX(-'+ 16*parseInt(a) +'rem)' + 'translateZ(0)';
	}	
});
app.controller("goItem",function($scope,$ionicSlideBoxDelegate){
	$scope.num = 0;
	$scope.go=function(index){
		$ionicSlideBoxDelegate.slide(index)
	}
	$scope.go_changed=function(index){
		console.log(index)
		$scope.num = index+1;
	}
	$ionicSlideBoxDelegate.update();
})
