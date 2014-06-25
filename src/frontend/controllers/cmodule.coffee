define ["angular"], (ng) ->
	modules = ng.module "app.customControllers", []
	return (Ctrl, otherDeps...) ->
		deps = ["$scope", "cAPI", "logger", "$rootScope", "$state", "$http"].concat otherDeps
		name = Ctrl.name
		deps.push ($scope, cAPI, logger, $rootScope, $state, $http, other...) ->
			instance = new Ctrl
			instance = $.extend instance, {
				API: cAPI
				state: $state
				log: logger
				http: $http
				root: $rootScope
				name: name
			}
			
			for dep in otherDeps
				name = dep
				name = dep.substr(1) if dep[0] is "$"
				instance[name] = other.shift()
			 	
			for k, v of instance
				console.log "KEY", k
				if typeof v is "funciton"
					instance[k].bind instance
			
			for k, v of Ctrl::
				instance[k] = v
				console.log "KEY::", k
				if typeof v is "function"
					instance[k].bind instance

			for k, v of instance
				$scope[k] = v
				
			$scope["scope"] = $scope
			instance["scope"] = $scope
			
			console.log instance
			return instance

		controller = modules.controller name, deps
		return controller