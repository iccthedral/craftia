Number::clamp = (min, max) ->
  val = @valueOf()
  inst = val
  if val < min
    inst = min
  else if val > max
    inst = max
  return val

String::endsWith = (str) ->
	return @lastIndexOf(str) + str.length is @length

Object.defineProperty Object::, "stringify",
	get: -> 
		return JSON.stringify(@)
	enumerable: false
