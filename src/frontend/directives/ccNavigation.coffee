define ["./module"], (module) ->
	module.directive "ccNavigation", [
		"$state"
		"$rootScope"
		($state, $rootScope) ->
			$rootScope.$on "$stateChangeStart", (event, toState, toParams, fromState, fromParams) ->
				console.log "WTF"
				menu = $rootScope._menu_
				return unless menu?
				for k, v of menu
					console.log "K", k, "v", v
					markElem = v.parent().find ".top-hmenu-item"
					markElem.removeClass "top-hmenu-item-current"

				elem = menu[toState.url]
				return unless elem?
				markElem = elem.parent().find ".top-hmenu-item"
				markElem.addClass "top-hmenu-item-current"
				
			directive =
				restrict: "A"
				link: (scope, element, attrs) ->
					menu = $(element)
					$rootScope._menu_ = {}
					menu.find("a").each (k, v) ->
						sref = $(v).attr("ui-sref")
						if sref[0] is "."
							sref = "/#{sref.substring 1}"

						console.log sref
						$rootScope._menu_[sref] = $(v)
	]
