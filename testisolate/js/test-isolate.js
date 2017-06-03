var app=angular.module("app",[]);
app.controller('controller', myController);

function myController($scope){
	$scope.name="Son";
}

app.directive('ngTest',myDirectiveFunction);

function myDirectiveFunction(){
	var directive={};
	
	return{
		directive.restrict="EA",
		directive.template='<input type="text" name={{name}}>',
	}
}