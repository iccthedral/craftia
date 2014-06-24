define ["factories/module", "toastr"], (module, toastr) ->
		
	module.factory "logger", ["$log", "config"
	($log, config) ->
		$.extend toastr.options, config.toastr

		logIt = (message, data, source, showToast = true, toastType) ->
			write = if (toastType is 'error') then $log.error else $log.log
			source = if source then '[' + source + '] ' else ''

			write(source, message, data)

			if showToast
				if (toastType is 'error')
					toastr.error(message)
				else if (toastType is 'warning')
					toastr.warning(message)
				else if (toastType is 'success')
					toastr.success(message)
				else
					toastr.info(message)
				
		return out = 
			getLogFn: (moduleId, fnName) ->
				fname = fnName.toLowerCase()
				return out[fname]

			log: (message, data, source, showToast) ->
				logIt message, data, source, showToast, "info"

			warning: (message, data, source, showToast) ->
				logIt message, data, source, showToast, "warning"
		
			error: (message, data, source, showToast) ->
				if message.statusText? and message.responseText?
					message = "#{message.statusText} - #{message.responseText}"

				logIt message, data, source, showToast, "error"
		
			success: (message, data, source, showToast) ->
				logIt message, data, source, showToast, "success"
	]