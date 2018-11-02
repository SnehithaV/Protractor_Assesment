

//To generate report:
var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
//var allureReporter = require('jasmine-allure-reporter');

exports.config = {
  directConnect: true,
  capabilities: {
	    //'browserName': 'chrome'
		  'browserName': 'firefox'
	  },
	  
	  /* //parallel Testing-multiple instances:
	  capabilities: {
		    'browserName': 'chrome',
			 shardTestFiles:true,
			 maxInstances:2
		  },*/
	  /*//parallel Testing-multiple browsers:
	  multiCapabilities:[
		  {
			  
			  'browserName':'chrome'
		  },
		  {
			  'browserName':'firefox'
		  }
	  ],*/
	  
	  framework: 'jasmine',
	  specs:['./src/specFiles/*.js'],
	  
	  onPrepare: function(){
		   //for protractor-jasmine2-html
		   	  jasmine.getEnv().addReporter(new jasmine2HtmlReporter({
			  savePath:'target/screenshots',
			  takeScreenshots:true,
			  //takeScreenshotsOnlyOnFailures:true
		  }));
		  /*//for allure-report
		   jasmine.getEnv().addReporter(new allureReporter({
			   resultsDir:'./node_modules/jasmine-allure-reporter/allure-results'
		   }));*/
	  },
	  /*suites: {
		functional:['./src/CalculatorWithFunction.js','./src/CalculatorTwo.js'],
		//for all calculator functional:['./src/Calculator*.js'],
		//for all testscripts groupname:['./src/*.js']
		//for all programs in all packages groupname:['./src/*/
		  //*.js']
		//regression:['./src/Calculator.js']
	 // },
		  jasmineNodeOpts: {
			    defaultTimeoutInterval: 30000
			  }
			};
