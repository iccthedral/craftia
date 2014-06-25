define ["directives/module"], (module) ->
	module.directive "ccWidgetMinimize", ->
		directive =
			restrict: "A"
			template: "<i class='fa fa-chevron-up'></i>"
			link: (scope, element, attrs) ->
				attrs.$set "href", "#"
				attrs.$set "wminimize"
				element = $(element)
				element.click (e) ->
					e.preventDefault()
					$wcontent = element.parent().parent().next ".widget-content"
					iElem = element.children "i"
					if $wcontent.is ":visible"
						iElem.removeClass "fa fa-chevron-up"
						iElem.addClass "fa fa-chevron-down"
					else
						iElem.removeClass "fa fa-chevron-down"
						iElem.addClass "fa fa-chevron-up"
					$wcontent.toggle 500
