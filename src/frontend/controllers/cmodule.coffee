define ["angular"], (ng) ->
	modules = ng.module "app.customControllers", []
	return (Ctrl, otherDeps...) ->
		deps = ["$scope", "cAPI", "logger"].concat otherDeps
		name = Ctrl.name
		instance = new Ctrl
		deps.push ($scope, cAPI, logger, other...) ->
			out = new Object {
				API: cAPI
				log: logger
			}
			for dep in otherDeps
				name = dep
				name = dep.substr(1) if dep[0] is "$"
				out[name] = other.shift()
				
			for k, v of instance
				out[k] = v
				if typeof out[k] is "funciton"
					out[k].bind out

			for k, v of out
				$scope[k] = v

			return out

		modules.controller name, deps
		return instance