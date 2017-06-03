(function(){
	var app=angular.module("appMember",[]);
	app.controller('memberController', function($scope,$rootScope){
		$scope.expression = function () 
		{
			alert($rootScope.test);
		}
	});
	//create a directive
	app.directive("loadMember",myDirective);

	function myDirective()
	{
		return{
			retrict:'EACM',
			scope: {
				textSearch:'=textSearch'
			},
			controller:['$scope','$rootScope', function($scope, $rootScope){
				var members=[
					{id:1,firstName:"Lien",lastName:"Nguyen Thi"},
					{id:2,firstName:"Thao",lastName:"Le Van"},
					{id:3,firstName:"Thuan",lastName:"Tran Thi"},
					{id:4,firstName:"Hoang",lastName:"Đinh Thị"}
				];
				
				$scope.members=members;
				//filter form Search
				$scope.textSearch=members.name;

				//Select all
				$scope.selectedMembers = [];
				
				$scope.chooseMember=function(member)
				{
					if(member.active){
						$scope.selectedMembers.push(member.id);
					}
					else{
						$scope.selectedMembers.splice($scope.selectedMembers.indexOf(member.id), 1);
					}
				};
				$scope.checkAll=function(){
					angular.forEach(members, function(member) {
						member.active = $scope.selectAll;
						$scope.chooseMember(member);
				    });
				};
			}],
			templateUrl:'showMember.html'
		}
	}
})();