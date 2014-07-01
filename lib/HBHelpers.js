(function() {
  exports.ifCond = function(v1, operator, v2, options) {
    switch (operator) {
      case "==":
        if (v1 === v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "!=":
        if (v1 !== v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "===":
        if (v1 === v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "!==":
        if (v1 !== v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "&&":
        if (v1 && v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "||":
        if (v1 || v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "<":
        if (v1 < v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case "<=":
        if (v1 <= v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case ">":
        if (v1 > v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case ">=":
        if (v1 >= v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      default:
        if (eval("" + v1 + operator + v2)) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
    }
  };

  exports.isCustomer = function(user) {
    if (user.type === "Customer") {

    }
  };

}).call(this);
