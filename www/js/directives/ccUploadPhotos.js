var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

define(["./module"], function(module) {
  return module.directive("ccUploadPhotos", [
    "$rootScope", "$window", "$timeout", "logger", function($rootScope, $window, $timeout, logger) {
      var addHandler, directive, dndDisabled;
      addHandler = function(obj, evt, handler) {
        if (obj.addEventListenr) {
          return obj.addEventListenr(evt, handler, false);
        } else if (obj.attachEvent) {
          return obj.attachEvent("on" + evt, handler);
        } else {
          return obj["on" + evt] = handler;
        }
      };
      dndDisabled = false;
      return directive = {
        restrict: "AE",
        scope: {
          num: "=",
          onUpload: "&upload",
          photos: "="
        },
        templateUrl: "shared/templates/forms/uploadPhotos.html",
        compile: function(element, attrs, transclude) {
          var acceptedTypes, post, pre;
          acceptedTypes = ["image/png", "image/jpeg", "image/jpg"];
          pre = function(scope, element, attrs) {
            var i, _i, _ref;
            scope.photos || (scope.photos = []);
            for (i = _i = 0, _ref = scope.num; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              scope.photos.push({
                src: null,
                description: ""
              });
            }
            scope.inFocus = false;
            scope.progressStyle = {
              width: "0%"
            };
            if ($window.FileReader == null) {
              scope.dndDisabled = true;
            } else {
              scope.dndDisabled = false;
            }
            return dndDisabled = scope.dndDisabled;
          };
          post = function(scope, element, attrs) {
            var cancel, setupClassic, setupDnD;
            if (attrs["disableDesc"] == null) {
              scope.descriptionEnabled = false;
            } else {
              scope.descriptionEnabled = true;
            }
            console.log(scope.descriptionEnabled, attrs["disableDesc"]);
            scope.onClick = function(photo) {
              if ((photo != null ? photo.src : void 0) == null) {
                return;
              }
              return scope.focused = photo;
            };
            cancel = function(e) {
              if (typeof e.preventDefault === "function") {
                e.preventDefault();
              }
              return false;
            };
            setupClassic = function() {
              return false;
            };
            setupDnD = function() {
              var holders, inputs, parent, previewFile, readFile;
              parent = $(element).find(".photo-uploader");
              holders = parent.find(".photo-holder");
              inputs = parent.find("input");
              inputs.change(function() {
                var holder;
                holder = $(this).parent();
                console.debug(this.files);
                return readFile(holder, this.files);
              });
              previewFile = function(holder, file) {
                var reader, _ref;
                if (_ref = file.type, __indexOf.call(acceptedTypes, _ref) < 0) {
                  return;
                }
                reader = new FileReader();
                holder = $(holder);
                reader.onload = function(event) {
                  var photo, rawImg;
                  rawImg = event.target.result;
                  if (((rawImg.length - 814) / 1.37) > 128 * 1024) {
                    return alert("Images greater than 128 kilobytes are not allowed");
                  }
                  if (typeof scope.onUpload === "function") {
                    scope.onUpload({
                      file: file,
                      rawImg: rawImg
                    });
                  }
                  photo = scope.photos[holder.attr("photo-id")];
                  holder.find("img").attr("src", rawImg);
                  photo.src = rawImg;
                  scope.focused = photo;
                  return scope.$apply(function() {
                    return scope.inFocus = true;
                  });
                };
                return reader.readAsDataURL(file);
              };
              readFile = function(holder, files) {
                var file, formData, name, size, _i, _len, _results;
                formData = new FormData();
                _results = [];
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  name = file.name;
                  size = file.size;
                  formData.append("file", file);
                  _results.push(previewFile(holder, file));
                }
                return _results;
              };
              return holders.each(function(k, v) {
                var droppable;
                droppable = $(v);
                droppable.on("dragleave", function(ev) {
                  cancel(ev);
                  return $(this).removeClass("photo-holder-hover");
                });
                droppable.on("dragend", function(ev) {
                  cancel(ev);
                  return $(this).removeClass("photo-holder-hover");
                });
                droppable.on("dragover", function(ev) {
                  cancel(ev);
                  return $(this).addClass("photo-holder-hover", 500);
                });
                return addHandler(v, "drop", function(ev) {
                  var dt;
                  dt = ev.dataTransfer;
                  cancel(ev);
                  readFile(this, dt.files);
                  return $(this).removeClass("photo-holder-hover");
                });
              });
            };
            if (dndDisabled) {
              logger.error("HTML5 Drag and Drop isnt supported");
              return setupClassic();
            } else {
              return $timeout(setupDnD, 0);
            }
          };
          return {
            pre: pre,
            post: post
          };
        }
      };
    }
  ]);
});
