module.exports = () ->
	String.prototype.endsWith = (str) ->
		return @lastIndexOf(str) + str.length is @length