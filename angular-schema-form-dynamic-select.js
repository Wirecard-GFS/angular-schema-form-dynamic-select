;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular-schema-form'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular-schema-form'));
  } else {
    root.angularSchemaFormDynamicSelect = factory(root.schemaForm);
  }
}(this, function(schemaForm) {
angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/strap/strapmultiselect.html","<div ng-controller=\"dynamicSelectController\" class=\"form-group {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\r\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n\r\n    <div class=\"form-group {{form.fieldHtmlClass}}\" ng-init=\"populateTitleMap(form)\">\r\n        <button type=\"button\" class=\"btn btn-default\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\"\r\n                data-placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\')}}\"\r\n                data-html=\"1\"\r\n                data-multiple=\"1\" ng-disabled=\"form.disabled\"\r\n				data-placement=\"{{form.options.placement || \'bottom-left\'}}\"\r\n				data-max-length=\"{{form.options.inlineMaxLength}}\"\r\n                data-max-length-html=\"{{form.options.inlineMaxLengthHtml}}\"\r\n                bs-options=\"item.value as item.name for item in form.titleMap | selectFilter:this:$$value$$:&quot;$$value$$&quot;\"\r\n                bs-select>\r\n        </button>\r\n        <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/strap/strapselect.html","<div ng-controller=\"dynamicSelectController\" class=\"form-group {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\r\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n\r\n    <div class=\"form-group {{form.fieldHtmlClass}}\" ng-init=\"populateTitleMap(form)\">\r\n        <button ng-if=\"(form.options.multiple == \'true\') || (form.options.multiple == true)\"\r\n                type=\"button\" class=\"btn btn-default\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\"\r\n                data-placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\')}}\"\r\n                data-html=\"1\" data-multiple=\"1\" data-max-length=\"{{form.options.inlineMaxLength}}\"\r\n				data-placement=\"{{form.options.placement || \'bottom-left\'}}\"\r\n                data-max-length-html=\"{{form.options.inlineMaxLengthHtml}}\" ng-disabled=\"form.disabled\"\r\n                bs-options=\"item.value as item.name for item in form.titleMap | selectFilter:this:$$value$$:&quot;$$value$$&quot;\"\r\n                bs-select>\r\n        </button>\r\n        <button ng-if=\"!((form.options.multiple == \'true\') || (form.options.multiple == true))\"\r\n                type=\"button\" class=\"btn btn-default\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\"\r\n                data-placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\')}}\"\r\n                data-html=\"1\" ng-disabled=\"form.disabled\"\r\n				data-placement=\"{{form.options.placement || \'bottom-left\'}}\"\r\n                bs-options=\"item.value as item.name for item in form.titleMap | selectFilter:this:$$value$$:&quot;$$value$$&quot;\"\r\n                bs-select>\r\n        </button>\r\n        <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}} </span>\r\n    </div>\r\n</div>\r\n\r\n");}]);
angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/uiselect/uiselect.html","<div ng-controller=\"dynamicSelectController\" class=\"form-group\"\r\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"\r\n         ng-init=\"insideModel=$$value$$;\">\r\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n\r\n    <div class=\"form-group\">\r\n        <ui-select ng-model=\"select_model.selected\"\r\n                   ng-if=\"!(form.options.tagging||false)\" theme=\"bootstrap\" ng-disabled=\"form.disabled\"\r\n                   on-select=\"$$value$$=$item.value\" class=\"{{form.options.uiClass}}\">\r\n            <ui-select-match\r\n                    placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">\r\n                {{select_model.selected.name}}\r\n            </ui-select-match>\r\n            <ui-select-choices refresh=\"populateTitleMap(form, $select.search)\"\r\n                               refresh-delay=\"form.options.refreshDelay\" group-by=\"form.options.groupBy\"\r\n                               repeat=\"item in form.titleMap | propsFilter: {name: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n                <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\r\n                <div ng-if=\"item.description\">\r\n                    <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\'))+ \'</small>\'\"></span>\r\n                </div>\r\n            </ui-select-choices>\r\n        </ui-select>\r\n        <ui-select ng-controller=\"dynamicSelectController\" ng-model=\"select_model.selected\"\r\n                   ng-if=\"(form.options.tagging||false) && !(form.options.groupBy || false)\"\r\n                   tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\"\r\n                   tagging-tokens=\"form.options.taggingTokens\"\r\n                   theme=\"bootstrap\" ng-disabled=\"form.disabled\" on-select=\"$$value$$=$item.value\"\r\n                   class=\"{{form.options.uiClass}}\">\r\n            <ui-select-match\r\n                    placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">\r\n                {{select_model.selected.name}}&nbsp;\r\n                <small>{{(select_model.selected.isTag===true ? form.options.taggingLabel : \'\')}}</small>\r\n            </ui-select-match>\r\n            <!--repeat code because tagging does not display properly under group by but is still useful -->\r\n            <ui-select-choices refresh=\"populateTitleMap(form, $select.search)\"\r\n                               refresh-delay=\"form.options.refreshDelay\"\r\n                               repeat=\"item in form.titleMap | propsFilter: {name: $select.search, description: (form.options.searchDescription===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n                <div ng-if=\"item.isTag\"\r\n                     ng-bind-html=\"\'<div>\' + (item.name   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div>\r\n                <div ng-if=\"!item.isTag\" ng-bind-html=\"item.name + item.isTag| highlight: $select.search\"></div>\r\n                <div ng-if=\"item.description\">\r\n                    <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\r\n                </div>\r\n            </ui-select-choices>\r\n        </ui-select>\r\n\r\n        <!--repeat code because tagging does not display properly under group by but is still useful -->\r\n\r\n        <ui-select ng-controller=\"dynamicSelectController\" ng-model=\"select_model.selected\"\r\n                   ng-if=\"(form.options.tagging||false) && (form.options.groupBy || false)\"\r\n                   tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\"\r\n                   tagging-tokens=\"form.options.taggingTokens\"\r\n                   theme=\"bootstrap\" ng-disabled=\"form.disabled\" on-select=\"$$value$$=$item.value\"\r\n                   class=\"{{form.options.uiClass}}\">\r\n            <ui-select-match\r\n                    placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">\r\n                {{select_model.selected.name}}&nbsp;\r\n                <small>{{(select_model.selected.isTag===true ? form.options.taggingLabel : \'\')}}</small>\r\n            </ui-select-match>\r\n            <ui-select-choices group-by=\"form.options.groupBy\"\r\n                               refresh=\"populateTitleMap(form, $select.search)\"\r\n                               refresh-delay=\"form.options.refreshDelay\"\r\n                               repeat=\"item in form.titleMap | propsFilter: {name: $select.search, description: (form.options.searchDescription===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n                <div ng-if=\"item.isTag\"\r\n                     ng-bind-html=\"\'<div>\' + (item.name  | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div>\r\n                <div ng-if=\"!item.isTag\" ng-bind-html=\"item.name + item.isTag| highlight: $select.search\"></div>\r\n                <div ng-if=\"item.description\">\r\n                    <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\r\n                </div>\r\n            </ui-select-choices>\r\n        </ui-select>\r\n\r\n        <input\r\n            type=\"hidden\"\r\n            name=\"{{form.key.slice(-1)[0]}}\"\r\n            toggle-single-model\r\n            sf-changed=\"form\"\r\n            ng-model=\"insideModel\"\r\n            schema-validate=\"form\"/>\r\n\r\n        <span ng-if=\"form.feedback !== false\"\r\n          class=\"form-control-feedback\"\r\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\r\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\r\n\r\n        <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n\r\n    </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/uiselect/uiselectmultiple.html","\r\n<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"\r\n        ng-controller=\"dynamicSelectController\" ng-init=\"$$value$$=$$value$$||[];uiMultiSelectInitInternalModel($$value$$)\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n  <div class=\"form-group\">\r\n    <ui-select multiple sortable-options=\"{{form.sortableOptions}}\" ng-model=\"internalModel\" theme=\"bootstrap\"\r\n               on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\"\r\n               class=\"{{form.options.uiClass}}\" ng-disabled=\"form.disabled\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.name}}</ui-select-match>\r\n      <ui-select-choices repeat=\"item in form.titleMap | propsFilter: {name: $select.search}\"\r\n         refresh=\"populateTitleMap(form, $select.search)\"\r\n         refresh-delay=\"form.options.refreshDelay\"\r\n         group-by=\"form.options.groupBy\">\r\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\r\n      </ui-select-choices>\r\n    </ui-select>\r\n    <span ng-if=\"form.feedback !== false\"\r\n      class=\"form-control-feedback\"\r\n      ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\r\n    <div class=\"help-block\"\r\n      ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\r\n      ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\r\n  </div>\r\n</div>\r\n");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

            var select = function (name, schema, options) {
                if ((schema.type === 'string') && ("enum" in schema)) {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'strapselect';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(select);

            //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapselect',
                'directives/decorators/bootstrap/strap/strapselect.html');

            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapmultiselect',
                'directives/decorators/bootstrap/strap/strapmultiselect.html');

            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapselectdynamic',
                'directives/decorators/bootstrap/strap/strapselect.html');

            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'strapmultiselectdynamic',
                'directives/decorators/bootstrap/strap/strapmultiselect.html');


            // UI SELECT
            //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'uiselect',
                'directives/decorators/bootstrap/uiselect/uiselect.html');


            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'uiselectmultiple',
                'directives/decorators/bootstrap/uiselect/uiselectmultiple.html');


        }])
  .directive("toggleSingleModel", function() {
    // some how we get this to work ...
    return {
      require: 'ngModel',
      restrict: "A",
      scope: {},
      replace: true,
      controller: ['$scope', function($scope)  {
        $scope.$parent.$watch('select_model.selected',function(){
          if($scope.$parent.select_model.selected != undefined) {
            $scope.$parent.insideModel = $scope.$parent.select_model.selected.value;
            $scope.$parent.ngModel.$setViewValue($scope.$parent.select_model.selected.value);
          }
        });
      }]
    };
  })

  .directive('multipleOn', function() {
    return {
    link: function($scope, $element, $attrs) {
        $scope.$watch(
            function () { return $element.attr('multiple-on'); },
            function (newVal) {

                if(newVal == "true") {
                    var select_scope = angular.element($element).scope().$$childTail;
                    select_scope.$isMultiple = true;
                    select_scope.options.multiple = true;
                    select_scope.$select.$element.addClass('select-multiple');
                }
                else {
                    angular.element($element).scope().$$childTail.$isMultiple = false;
                }
            }
        );
      }
    };
  })
  .filter('whereMulti', function() {
    return function(items, key, values) {
      var out = [];

      if (angular.isArray(values) && items !== undefined) {
          values.forEach(function (value) {
              for (var i = 0; i < items.length; i++) {
                  if (value == items[i][key]) {
                      out.push(items[i]);
                      break;
                  }
              }
          });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  })
  .filter('propsFilter', function() {
        return function (items, props) {
            var out = [];

            if (angular.isArray(items)) {
                items.forEach(function (item) {
                    var itemMatches = false;

                    var keys = Object.keys(props);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        if (item.hasOwnProperty(prop)) {
                            //only match if this property is actually in the item to avoid
                            var text = props[prop].toLowerCase();
                            //search for either a space before the text or the textg at the start of the string so that the middle of words are not matched
                            if (item[prop].toString().toLowerCase().indexOf(text) === 0 || ( item[prop].toString()).toLowerCase().indexOf(' ' + text) !== -1) {
                                itemMatches = true;
                                break;
                            }
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    });

angular.module('schemaForm').controller('dynamicSelectController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

    if (!$scope.form.options) {
        $scope.form.options = {};
    }

    $scope.select_model = {};

    //console.log("Setting options." + $scope.form.options.toString());
    $scope.form.options.scope = $scope;

    $scope.triggerTitleMap = function () {
        console.log("listener triggered");
        // Ugly workaround to trigger titleMap expression re-evaluation so that the selectFilter it reapplied.
        $scope.form.titleMap.push({"value": "345890u340598u3405u9", "name": "34095u3p4ouij"})
        $timeout(function () { $scope.form.titleMap.pop() })

    };

    $scope.initFiltering = function (localModel) {
        if ($scope.form.options.filterTriggers) {
            $scope.form.options.filterTriggers.forEach(function (trigger) {
                $scope.$parent.$watch(trigger, $scope.triggerTitleMap)

            });
        }
        // This is set here, as the model value may become unitialized and typeless if validation fails.
        $scope.localModelType =  Object.prototype.toString.call(localModel);
        $scope.filteringInitialized = true;
    };


    $scope.finalizeTitleMap = function (form, data, newOptions) {
        // Remap the data

        form.titleMap = [];

        if (newOptions && "map" in newOptions && newOptions .map) {
            var current_row = null,
            final = newOptions.map.nameProperty.length - 1,
            separator = newOptions.map.separatorValue ? newOptions.map.separatorValue : ' - ';
                data.forEach(function (current_row) {
                current_row["value"] = current_row[newOptions .map.valueProperty];
                //check if the value passed is a string or not
                if(typeof newOptions.map.nameProperty != 'string'){
                    //loop through the object/array
                    var newName = "";
                    for (var i in newOptions.map.nameProperty) {
                        newName += current_row[newOptions .map.nameProperty[i]];
                        if(i != final){newName += separator};
                    }
                    current_row["name"] = newName; //init the 'name' property
                }
                else{
                    //if it is a string
                    current_row["name"] = current_row[newOptions .map.nameProperty];
                }
                form.titleMap.push(current_row);
            });

        }
        else {
            data.forEach(function (item) {
                    if ("text" in item) {
                        item.name = item.text
                    }
                }
            );
            form.titleMap = data;
        }

        if ($scope.insideModel && $scope.select_model.selected === undefined) {
            $scope.select_model.selected = $scope.find_in_titleMap($scope.insideModel).item;
        }

        // The ui-selects needs to be reinitialized (UI select sets the internalModel and externalModel.
        if ($scope.internalModel) {
            //console.log("Call uiMultiSelectInitInternalModel");
            $scope.uiMultiSelectInitInternalModel($scope.externalModel);
        }
    };

    $scope.clone = function (obj) {
        // Clone an object (except references to this scope)
        if (null == obj || "object" != typeof(obj)) return obj;

        var copy = obj.constructor();
        for (var attr in obj) {
            // Do not clone if it is this scope
            if (obj[attr] != $scope) {
                if (obj.hasOwnProperty(attr)) copy[attr] = $scope.clone(obj[attr]);
            }
        }
        return copy;
    };


    $scope.getCallback = function (callback) {
        if (typeof(callback) == "string") {
            var _result = $scope.$parent.evalExpr(callback);
            if (typeof(_result) == "function") {
                return _result;
            }
            else {
                throw("A callback string must match name of a function in the parent scope")
            }

        }
        else if (typeof(callback) == "function") {
            return callback;
        }
        else {
            throw("A callback must either be a string matching the name of a function in the parent scope or a " +
            "direct function reference")

        }
    };

    $scope.getOptions = function (options, search) {
        // If defined, let the a callback function manipulate the options
        if (options.httpPost && options.httpPost.optionsCallback) {
            newOptionInstance = $scope.clone(options);
            return $scope.getCallback(options.httpPost.optionsCallback)(newOptionInstance, search);
        }
        if (options.httpGet && options.httpGet.optionsCallback) {
            newOptionInstance = $scope.clone(options);
            return $scope.getCallback(options.httpGet.optionsCallback)(newOptionInstance, search);
        }
        else {
            return options;
        }
    };

    $scope.test = function (form) {
        form.titleMap.pop();
    };


    $scope.populateTitleMap = function (form, search) {

        if (form.schema && "enum" in form.schema) {
            form.titleMap = [];
            form.schema.enum.forEach(function (item) {
                    form.titleMap.push({"value": item, "name": item})
                }
            );

        }
        else if (!form.options) {

            console.log("dynamicSelectController.populateTitleMap(key:" + form.key + ") : No options set, needed for dynamic selects");
        }
        else if (form.options.callback) {
            form.titleMap = $scope.getCallback(form.options.callback)(form.options, search);
            $scope.finalizeTitleMap(form,form.titleMap, form.options);
            console.log("callback items: ", form.titleMap);
        }
        else if (form.options.asyncCallback) {
            return $scope.getCallback(form.options.asyncCallback)(form.options, search).then(
                function (_data) {
                    // In order to work with both $http and generic promises
                    _data = _data.data || _data;
                    $scope.finalizeTitleMap(form, _data, form.options);
                    //console.log('asyncCallback items', form.titleMap);
                },
                function (data, status) {
                    if (form.options.onPopulationError) {
                        $scope.getCallback(form.options.onPopulationError)(form, data, status);
                    }
                    else {
                        alert("Loading select items failed(Options: '" + String(form.options) +
                        "\nError: " + status);
                    }
                });
        }
        else if (form.options.httpPost) {
            var finalOptions = $scope.getOptions(form.options, search);

            return $http.post(finalOptions.httpPost.url, finalOptions.httpPost.parameter).then(
                function (_data) {

                    $scope.finalizeTitleMap(form, _data.data, finalOptions);
                    console.log('httpPost items', form.titleMap);
                },
                function (data, status) {
                    if (form.options.onPopulationError) {
                        $scope.getCallback(form.options.onPopulationError)(form, data, status);
                    }
                    else {
                        alert("Loading select items failed (URL: '" + String(finalOptions.httpPost.url) +
                        "' Parameter: " + String(finalOptions.httpPost.parameter) + "\nError: " + status);
                    }
                });
        }
        else if (form.options.httpGet) {
            var finalOptions = $scope.getOptions(form.options, search);
            return $http.get(finalOptions.httpGet.url, finalOptions.httpGet.parameter).then(
                function (data) {
                    $scope.finalizeTitleMap(form, data.data, finalOptions);
                    console.log('httpGet items', form.titleMap);
                },
                function (data, status) {
                    if (form.options.onPopulationError) {
                        $scope.getCallback(form.options.onPopulationError)(form, data, status);
                    }
                    else {
                        alert("Loading select items failed (URL: '" + String(finalOptions.httpGet.url) +
                        "\nError: " + status);
                    }
                });
        }
        else {
            if ($scope.insideModel && $scope.select_model.selected === undefined) {
                $scope.select_model.selected = $scope.find_in_titleMap($scope.insideModel);
            }
        }
    };


    $scope.find_in_titleMap = function (value) {
        for (i = 0; i < $scope.form.titleMap.length; i++) {
            if ($scope.form.titleMap[i].value == value) {
                return {"item": $scope.form.titleMap[i], "index": i};
            }
        }

    };

    $scope.uiMultiSelectInitInternalModel = function(supplied_model)
    {


        //console.log("$scope.externalModel: Key: " +$scope.form.key.toString() + " Model: " + supplied_model.toString());
        $scope.externalModel = supplied_model;
        $scope.internalModel = [];
        if ($scope.form.titleMap) {
            if (supplied_model !== undefined && angular.isArray(supplied_model)){
                supplied_model.forEach(function (value) {
                        titleMap_item = $scope.find_in_titleMap(value);
                        $scope.internalModel.push(titleMap_item.item);
                        $scope.form.titleMap.splice(titleMap_item.index, 1);
                    }
                )
            }
        }
    };

}]);

angular.module('schemaForm').filter('selectFilter', [function ($filter) {
    return function (inputArray, controller, localModel, strLocalModel) {
        // As the controllers' .model is the global and its form is the local, we need to get the local model as well.
        // We also need tp be able to set it if is undefined after a validation failure,so for that we need
        // its string representation as well as we do not know its name. A typical value if strLocalModel is model['groups']
        // This is very ugly, though. TODO: Find out why the model is set to undefined after validation failure.

        if (!angular.isDefined(inputArray) || !angular.isDefined(controller.form.options) ||
            !angular.isDefined(controller.form.options.filter) || controller.form.options.filter == '') {
            return inputArray;
        }



        console.log("----- In filtering for " + controller.form.key + "(" + controller.form.title +"), model value: " + JSON.stringify( localModel) + "----");
        console.log("Filter:" + controller.form.options.filter);
        if (!controller.filteringInitialized) {
            console.log("Initialize filter");
            controller.initFiltering(localModel);
        }


        var data = [];


        angular.forEach(inputArray, function (curr_item) {
            //console.log("Compare: curr_item: " + JSON.stringify(curr_item) +
            //"with : " + JSON.stringify( controller.$eval(controller.form.options.filterTriggers[0])));
            if (controller.$eval(controller.form.options.filter, {item: curr_item})) {
                data.push(curr_item);
            }
            else if (localModel) {
                // If not in list, also remove the set value

                if (controller.localModelType == "[object Array]" && localModel.indexOf(curr_item.value) > -1) {
                    localModel.splice(localModel.indexOf(curr_item.value), 1);
                }
                else if (localModel == curr_item.value) {
                    console.log("Setting model of type " + controller.localModelType  + "to null.");
                    localModel = null;
                }
            }
        });

        if (controller.localModelType == "[object Array]" && !localModel) {
            // An undefined local model seems to mess up bootstrap select's indicators
            console.log("Resetting model of type " + controller.localModelType  + " to [].");

            controller.$eval(strLocalModel + "=[]");
        }

        //console.log("Input: " + JSON.stringify(inputArray));
        //console.log("Output: " + JSON.stringify(data));
        //console.log("Model value out : " + JSON.stringify(localModel));
        console.log("----- Exiting filter for " + controller.form.title + "-----");

        return data;
    };
}]);

return angularSchemaFormDynamicSelect;
}));
