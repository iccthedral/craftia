module.exports = () ->
    Number.prototype.clamp = (min, max) ->
        val = @valueOf()
        inst = val
        if val < min
            inst = min
        else if val > max
            inst = max
        return val