define(["require", "angular", "routes", "app"], function(require, ng, routes, app) {
  var $http, $q, addErrorClass, addLoadingClass, bodyElement, bootstrap, checkConfig, createBootstrap, createInjector, errorClass, forEach, isArray, isFunction, isObject, isPromise, isString, loadingClass, ngInjector, removeLoadingClass;
  forEach = ng.forEach;
  isString = ng.isString;
  isArray = ng.isArray;
  isFunction = ng.isFunction;
  isObject = ng.isObject;
  ngInjector = ng.injector(["ng"]);
  $q = ngInjector.get("$q");
  $http = ngInjector.get("$http");
  loadingClass = "deferred-bootstrap-loading";
  errorClass = "deferred-bootstrap-error";
  bodyElement = null;
  addLoadingClass = function() {
    return bodyElement.addClass(loadingClass);
  };
  removeLoadingClass = function() {
    return bodyElement.removeClass(loadingClass);
  };
  addErrorClass = function() {
    removeLoadingClass();
    return bodyElement.addClass(errorClass);
  };
  isPromise = function(value) {
    return (isObject(value)) && (isFunction(value.then));
  };
  checkConfig = function(config) {
    if (!(isObject(config))) {
      throw new Error("Bootstrap configuration must be an object.");
    }
    if (!(isString(config.module))) {
      throw new Error("'config.module' must be a string.");
    }
    if (!(isObject(config.resolve))) {
      throw new Error("'config.resolve' must be an object.");
    }
    if ((ng.isDefined(config.onError)) && !(isFunction(config.onError))) {
      throw new Error("'config.onError' must be a function.");
    }
  };
  createInjector = function(injectorModules) {
    if (isArray(injectorModules)) {
      if ((injectorModules.length === 1) && (injectorModules[0] === "ng")) {
        return ngInjector;
      } else {
        return ng.injector(injectorModules);
      }
    } else {
      if (injectorModules === "ng") {
        return ngInjector;
      } else {
        return ng.injector([injectorModules]);
      }
    }
  };
  createBootstrap = function(_arg) {
    var deferred, document, element, module;
    document = _arg.document, element = _arg.element, module = _arg.module;
    deferred = $q.defer();
    ng.element(document).ready(function() {
      ng.bootstrap(element, [module]);
      removeLoadingClass();
      return deferred.resolve(true);
    });
    return deferred.promise;
  };
  bootstrap = function(_arg) {
    var callResolveFn, constantNames, document, element, handleError, handleResults, injectorModules, module, onError, promises, resolve;
    document = _arg.document, element = _arg.element, module = _arg.module, injectorModules = _arg.injectorModules, onError = _arg.onError, resolve = _arg.resolve;
    injectorModules || (injectorModules = ["ng"]);
    promises = [];
    constantNames = [];
    bodyElement = ng.element(document.body);
    addLoadingClass();
    checkConfig(arguments[0]);
    callResolveFn = function(resolveFn, constantName) {
      var injector, result;
      constantNames.push(constantName);
      if (!(isFunction(resolveFn)) && !(isArray(resolveFn))) {
        throw new Error("Resolve for '" + constantName + "' is not a valid dependency injection format.");
      }
      injector = createInjector(injectorModules);
      result = injector.instantiate(resolveFn);
      console.debug("results", result);
      if (isPromise(result)) {
        return promises.push(result);
      } else {
        throw new Error("Resolve function for '" + constantName + "' must return a promise");
      }
    };
    handleResults = function(results) {
      forEach(results, function(value, index) {
        var result;
        result = (value != null ? value.data : void 0) != null ? value.data : value;
        return ng.module(module).constant(constantNames[index], result);
      });
      return createBootstrap({
        document: document,
        element: element,
        module: module
      });
    };
    handleError = function(error) {
      addErrorClass();
      if (!(isFunction(onError))) {
        return;
      }
      return onError(error);
    };
    forEach(resolve, callResolveFn);
    return $q.all(promises).then(handleResults, handleError);
  };
  return require(["domReady!"], function(document) {
    bootstrap({
      document: document,
      element: document,
      module: "app",
      injectorModules: ["ng", "ngRoute", "app.customControllers", "app.factories", "app.services", "app.controllers", "app.filters", "app.directives", "app.constants"],
      onError: function() {
        return alert("TERRIBLE ERROR!");
      },
      resolve: {
        USER_DETAILS: [
          "cAPI", function(API) {
            var deferred;
            deferred = $q.defer();
            $http.get(API.tryLogin).success(function(data) {
              return deferred.resolve(data);
            }).error(function() {
              return deferred.resolve({});
            });
            return deferred.promise;
          }
        ]
      }
    });
    app.run(function(USER_DETAILS, appUser, logger, $state) {
      appUser.load(USER_DETAILS);
      logger.success(appUser.username, appUser.isLoggedIn);
      if (!appUser.isLoggedIn) {
        return $state.go("anon");
      }
    });
    return app.config(function($provide) {
      return $provide.decorator("$exceptionHandler", function($delegate, config, logger) {
        var prefix;
        prefix = config.errorPrefix;
        return function(exception, cause) {
          var err, msg;
          $delegate(exception, cause);
          msg = exception.message;
          if ((prefix != null) && msg.startsWith(prefix)) {
            return;
          }
          err = {
            exception: exception,
            cause: cause
          };
          msg = "" + prefix + " - " + msg;
          return logger.error(msg, err, true);
        };
      });
    });
  });
});
