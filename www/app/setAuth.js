(function() {
	app = angular.module("app")

	app.run(["$rootScope", function($rootScope) {
		$rootScope.isAuthenticated = true;
	}]);
})()