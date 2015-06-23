// Karma configuration
// Generated on Wed Dec 03 2014 17:10:59 GMT-0500 (COT)

module.exports = function(config) {
	'use strict';

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: 'app/',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser / loaded via gulpfile.js
		files: ["../../app/bower_components/jquery/dist/jquery.js","../../app/bower_components/angular/angular.js","../../app/bower_components/angular-route/angular-route.js","../../app/bower_components/angular-animate/angular-animate.js","../../app/bower_components/angular-mocks/angular-mocks.js","../../app/bower_components/angular-local-storage/dist/angular-local-storage.js","../../app/bower_components/bootstrap/dist/js/bootstrap.js","../../app/views/admin/controllers/admin.form.html","../../app/views/admin/controllers/admin.index.html","../../app/views/vehicles/controllers/vehicles.compare.html","../../app/views/vehicles/controllers/vehicles.detail.html","../../app/views/vehicles/controllers/vehicles.index.html","../../app/views/vehicles/directives/card.html","../../app/views/vehicles/directives/compare.widget.html","../../app/js/modules/admin/admin.module.js","../../app/js/modules/app/sc.app.js","../../app/js/modules/app/sc.config.js","../../app/js/modules/app/sc.constants.js","../../app/js/modules/vehicles/vehicles.module.js","../../app/js/modules/admin/config/admin.config.js","../../app/js/modules/admin/config/admin.constants.js","../../app/js/modules/admin/controllers/admin.create.controller.js","../../app/js/modules/admin/controllers/admin.edit.controller.js","../../app/js/modules/admin/controllers/admin.index.controller.js","../../app/js/modules/admin/factories/adminVehicles.factory.js","../../app/js/modules/vehicles/config/vehicles.config.js","../../app/js/modules/vehicles/config/vehicles.constants.js","../../app/js/modules/vehicles/directives/card.directive.js","../../app/js/modules/vehicles/directives/compare.widget.directive.js","../../app/js/modules/vehicles/controllers/vehicles.compare.controller.js","../../app/js/modules/vehicles/controllers/vehicles.detail.controller.js","../../app/js/modules/vehicles/controllers/vehicles.index.controller.js","../../app/js/modules/vehicles/factories/vehicles.factory.js","../unit/admin/admin.mocks.js","../unit/vehicles/vehicles.mocks.js","../unit/admin/controllers/admin.create.controller.spec.js","../unit/admin/controllers/admin.edit.controller.spec.js","../unit/admin/controllers/admin.index.controller.spec.js","../unit/vehicles/controllers/vehicles.compare.controller.spec.js","../unit/vehicles/controllers/vehicles.detail.controller.spec.js","../unit/vehicles/controllers/vehicles.index.controller.spec.js","../unit/vehicles/directives/card.directive.spec.js","../unit/vehicles/directives/compare.widget.directive.spec.js","../unit/vehicles/factories/vehicles.factory.spec.js"],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
				// source files, that you wanna generate coverage for
					// do not include tests or libraries
					// (these files will be instrumented by Istanbul)
					'../../app/js/**/*.js': ['coverage'],
					'../../app/views/**/*.html': ['ng-html2js']
		},

		ngHtml2JsPreprocessor: {
			// strip this from the file path
    		stripPrefix: '.*/showcase/app/'
	    },


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'osx', 'html', 'coverage'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			'Chrome'
			//'PhantomJS'
		],

		// optionally, configure the reporter
		coverageReporter: {
			type : 'html',
			dir : '../coverage/'
		},

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};