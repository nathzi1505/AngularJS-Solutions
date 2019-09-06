(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://frozen-headland-33335.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
