(function (window) {
  'use strict';

  var applicationModuleName = 'mean';

  var applicationDefaultTitle = 'MEAN.JS';
  var applicationDefaultDescription = 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js';

  var service = {
    applicationEnvironment: window.env,
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: ['ngResource', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'ngFileUpload', 'ngImgCrop'],
    registerModule: registerModule,
    applicationDefaultTitle: applicationDefaultTitle,
    applicationDefaultDescription: applicationDefaultDescription
  };

  window.ApplicationConfiguration = service;

  // Add a new vertical module
  function registerModule(moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  }
}(window));
