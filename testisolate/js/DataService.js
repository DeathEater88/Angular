(function(){
	var app=angular.module("appMember",[]);
	app.controller('ctrlMember',loadMemberController);

	function loadMemberController($scope){
		//member
		var members=[
				{id:1,firstName:"Lien",lastName:"Nguyen Thi"},
				{id:2,firstName:"Thao",lastName:"Le Van"},
				{id:3,firstName:"Thuan",lastName:"Tran Thi"},
				{id:4,firstName:"Hoang",lastName:"Đinh Thị"}
			];

			$scope.members=members;
			//filter form Search
			$scope.textSearch=members.name;

			//get members was checked
			$scope.selectedMembers = [];
			$scope.chooseMember=function(member,active)
			{
				if(active)
				{
					$scope.selectedMembers.push(member.id);
				}
				else{
					$scope.selectedMembers.splice($scope.selectedMembers.indexOf(member.id), 1);
				}
			};
			$scope.checkAll=function(){
				angular.forEach($scope.members, function(member) {
			      	active = $scope.selectAll;
			    });
			};
	}

	//create a directive
	app.directive("loadMember",myDirective);

	function myDirective()
	{
		return{
			retrict:'EACM',
			templateUrl:'showMember.html',
			scope:{
				'choose':'&chooseMember'
			}
		}
	}
	
})();