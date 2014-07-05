define ["./module"], (module) ->
	module.directive "ccNavigation", [
		"$state"
		"$rootScope"
		($state, $rootScope) ->
			_menu_ = {}
			$rootScope.$on "$stateChangeStart", (event, toState, toParams, fromState, fromParams) ->
				menu = _menu_
				return unless menu?
				for k, v of menu
					markElem = v.next()
					markElem.removeClass "top-hmenu-item-current"
				elem = menu[toState.url]
				return unless elem?
				markElem = elem.next()
				markElem.addClass "top-hmenu-item-current"
				
			directive =
				restrict: "A"
				link: (scope, element, attrs) ->
					menu = $(element)
					_menu_ = {}
					menu.find("a").each (k, v) ->
						sref = $(v).attr("ui-sref")
						return unless sref?
						if sref[0] is "."
							sref = "/#{sref.substring 1}"
						_menu_[sref] = $(v)
	]
