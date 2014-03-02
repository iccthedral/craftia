module.exports = () ->
	
	Object.defineProperty(Object.prototype, "stringify",
		get: () -> 
			return JSON.stringify(@)
		enumerable: false
	)
