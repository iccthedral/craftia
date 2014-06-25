(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('ccImgPerson', ['config', function (config) {
        //Usage:
        //<img data-cc-img-person="{{s.speaker.imageSource}}"/>
        var basePath = config.imageSettings.imageBasePath;
        var unknownImage = config.imageSettings.unknownPersonImageSource;
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('ccImgPerson', function(value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }]);

    app.directive('crReveal', function(){
        return function(scope, element) {
            element.bind('mouseenter', function(){
                element.addClass('hover');
            }).bind('mouseleave', function(){
              element.removeClass('hover');
            })
        }
    })

    app.directive('crDate', function() {
      return {
        restrict:'A',
        link: function(scope, element, attrs){
          var crDate = attrs["crDate"];
          console.debug (crDate);
          attrs.$observe("crDate", function(){
            element.text(moment(crDate).format("MMMM Do YYYY"));
          });
        }
      };
    });

    app.directive('autoFillSync', function($timeout) {
       return {
          require: 'ngModel',
          link: function(scope, elem, attrs, ngModel) {
              var origVal = elem.val();
              $timeout(function () {
                  var newVal = elem.val();
                  if(ngModel.$pristine && origVal !== newVal) {
                      ngModel.$setViewValue(newVal);
                  }
              }, 500);
          }
       }
    });

    app.directive('ccSidebar', function () {
        // Opens and clsoes the sidebar menu.
        // Usage:
        //  <div data-cc-sidebar>
        // Creates:
        //  <div data-cc-sidebar class="sidebar">
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var $sidebarInner = element.find('.sidebar-inner');
            var $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    hideAllSidebars();
                    $sidebarInner.slideDown(350);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350);
                }

                function hideAllSidebars() {
                    $sidebarInner.slideUp(350);
                    $('.sidebar-dropdown a').removeClass(dropClass);
                }
            }
        }
    });

    app.directive('crAuth', ['$rootScope', function ($rootScope) {
        function link($scope, element, attrs) {
            var expr = $rootScope.isAuthenticated;

            if(!expr) {
                element.hide();
            }

            $rootScope.$watch('isAuthenticated', function(newVal, oldVal) {
                if(newVal === oldVal) {
                    return
                }
                if (newVal) {
                    element.show();
                }
                else {
                    element.hide();
                }
            })
        }
        return {
            link: link,
            restrict: 'A'
        }
    }]);

    app.directive('crNotAuth', ['$rootScope', function($rootScope) {
        function link($scope, element, attrs) {
            var expr = $rootScope.isAuthenticated;
            
            if(expr) {
                element.hide();
            }

            $rootScope.$watch('isAuthenticated', function(newVal, oldVal) {
                if(newVal === oldVal) {
                    return
                }
                if (newVal) {
                    element.hide();
                }
                else {
                    element.show();
                }
            })
        }
        return {
            link: link,
            restrict: 'A'
        }
    }]);

    app.directive('ccWidgetClose', function () {
        // Usage:
        // <a data-cc-widget-close></a>
        // Creates:
        // <a data-cc-widget-close="" href="#" class="wclose">
        //     <i class="fa fa-remove"></i>
        // </a>
        var directive = {
            link: link,
            template: '<i class="fa fa-remove"></i>',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$set('href', '#');
            attrs.$set('wclose');
            element.click(close);

            function close(e) {
                e.preventDefault();
                element.parent().parent().parent().hide(100);
            }
        }
    });

    app.directive('ccWidgetMinimize', function () {
        // Usage:
        // <a data-cc-widget-minimize></a>
        // Creates:
        // <a data-cc-widget-minimize="" href="#"><i class="fa fa-chevron-up"></i></a>
        var directive = {
            link: link,
            template: '<i class="fa fa-chevron-up"></i>',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            //$('body').on('click', '.widget .wminimize', minimize);
            attrs.$set('href', '#');
            attrs.$set('wminimize');
            element.click(minimize);

            function minimize(e) {
                e.preventDefault();
                var $wcontent = element.parent().parent().next('.widget-content');
                var iElement = element.children('i');
                if ($wcontent.is(':visible')) {
                    iElement.removeClass('fa fa-chevron-up');
                    iElement.addClass('fa fa-chevron-down');
                } else {
                    iElement.removeClass('fa fa-chevron-down');
                    iElement.addClass('fa fa-chevron-up');
                }
                $wcontent.toggle(500);
            }
        }
    });

    app.directive('ccScrollToTop', ['$window',
        // Usage:
        // <span data-cc-scroll-to-top></span>
        // Creates:
        // <span data-cc-scroll-to-top="" class="totop">
        //      <a href="#"><i class="fa fa-chevron-up"></i></a>
        // </span>
        function ($window) {
            var directive = {
                link: link,
                template: '<a href="#"><i class="fa fa-chevron-up"></i></a>',
                restrict: 'A'
            };
            return directive;

            function link(scope, element, attrs) {
                var $win = $($window);
                element.addClass('totop');
                $win.scroll(toggleIcon);

                element.find('a').click(function (e) {
                    e.preventDefault();
                    // Learning Point: $anchorScroll works, but no animation
                    //$anchorScroll();
                    $('body').animate({ scrollTop: 0 }, 500);
                });

                function toggleIcon() {
                    $win.scrollTop() > 300 ? element.slideDown(): element.slideUp();
                }
            }
        }
    ]);

    app.directive('ccSpinner', ['$window', function ($window) {
        // Description:
        //  Creates a new Spinner and sets its options
        // Usage:
        //  <div data-cc-spinner="vm.spinnerOptions"></div>
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.spinner = null;
            scope.$watch(attrs.ccSpinner, function (options) {
                if (scope.spinner) {
                    scope.spinner.stop();
                }
                scope.spinner = new $window.Spinner(options);
                scope.spinner.spin(element[0]);
            }, true);
        }
    }]);

    app.directive('ccWidgetHeader', function() {
        //Usage:
        //<div data-cc-widget-header title="vm.map.title"></div>
        var directive = {
            link: link,
            scope: {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@'
            },
            templateUrl: '/app/layout/widgetheader.html',
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$set('class', 'widget-head');
        }
    });

    app.directive("", function() {

    })
    
    app.directive("passwordVerify", function() {
       return {
          require: "ngModel",
          scope: {
            passwordVerify: '='
          },
          link: function(scope, element, attrs, ctrl) {
            scope.$watch(function() {
                var combined;

                if (scope.passwordVerify || ctrl.$viewValue) {
                   combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
                }                    
                return combined;
            }, function(value) {
                if (value) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        var origin = scope.passwordVerify;
                        if (origin !== viewValue) {
                            ctrl.$setValidity("passwordVerify", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("passwordVerify", true);
                            return viewValue;
                        }
                    });
                }
            });
         }
       };
    });

    app.directive("checkPermissions", function () {
        return {
            require: "ngModel",
            scope: {
                checkPermissions: '='
            },
            link: function (scope, element, attrs, ctrl) {
                scope.$watch(function () {
                    var combined;

                    if (scope.checkPermissions || ctrl.$viewValue) {
                        combined = scope.checkPermissions + '_' + ctrl.$viewValue;
                    }
                    return combined;
                }, function (value) {
                    if (value) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            var origin = scope.checkPermissions;
                            if (origin !== viewValue) {
                                ctrl.$setValidity("checkPermissions", false);
                                return undefined;
                            } else {
                                ctrl.$setValidity("checkPermissions", true);
                                return viewValue;
                            }
                        });
                    }
                });
            }
        };
    });

    app.directive('lightbox',  ['$modal', '$log', function ($modal, $log) {

        var ModalInstanceCtrl = function ($scope, $modalInstance, images, selectedImageIndex) {
            $scope.closeModal = function() {
                $modalInstance.close("hehe");
            }
            $scope.totalImages = images.length;
            $scope.selectedImageIndex = selectedImageIndex + 1;
            $scope.selectedImage = images[selectedImageIndex];
     
            $scope.source = function (img) {
                return img.img;
            };
 
            $scope.hasPrev = function () {
                return ($scope.selectedImageIndex !== 0);
            };
            
            $scope.hasNext = function () {
                return ($scope.selectedImageIndex < images.length - 1);
            };
 
            $scope.next = function () {
                $scope.selectedImageIndex = $scope.selectedImageIndex + 1;
                $scope.selectedImage = images[$scope.selectedImageIndex];
            };
 
            $scope.prev = function () {
                $scope.selectedImageIndex = $scope.selectedImageIndex - 1;
                $scope.selectedImage = images[$scope.selectedImageIndex];
            };
        };
        
        return {
            restrict: 'E',
            templateUrl: "app/templates/lightbox.html",
            scope: {
                images: '='
            },
     
            replace: true,
        
            controller: function ($rootScope, $scope) {
                $scope.selectedImageIndex = 0;
                $scope.tileWidth = 150;
                $scope.tileHeight = 150;
                $scope.modalInstance = null;
                
                $scope.open = function() {
                    $scope.modalInstance = $modal.open({
                      templateUrl: 'app/templates/album.html',
                      controller: ModalInstanceCtrl,
                      resolve: {
                        images: function() {
                            return $scope.images;
                        },
                        selectedImageIndex: function () {
                          return $scope.selectedImageIndex;
                        }
                      }
                    });
                }

                $scope.displayImage = function (img) {
                    $scope.selectedImageIndex = $scope.images.indexOf(img);
                    $scope.open();
                };
            }
        };
    }]);

})();