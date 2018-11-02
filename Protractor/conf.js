
//To generate report:
//var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var allureReporter = require('jasmine-allure-reporter');

// An example configuration file.
exports.config = {
  directConnect: true,
  //seleniumAddress:'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
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
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  
  specs:['./src/Functional/CalculatorWithFunction.js'],
	  //['./src/dataDrivern/DataDrivenUsingJson.js'],
	  //['./src/WinstonLogging.js'],
	  //['./src/NonAngular.js'],
	  //['./src/CalculatorWithFunction.js','./src/CalculatorTwo.js'],
	  //['./src/Calculator.js'],
	 // ['./src/CalculatorTwo.js'], 
	  //['./src/CalculatorOne.js'],
	  //['./src/example_spec.js'],
	  //['./src/CalculatorRepeator.js'], 

	  onPrepare: function(){
		  /* //for protractor-jasmine2-html
		   	  jasmine.getEnv().addReporter(new jasmine2HtmlReporter({
			  savePath:'target/screenshots',
			  takeScreenshots:true,
			  //takeScreenshotsOnlyOnFailures:true
		  }));*/
		  //for allure-report
		   jasmine.getEnv().addReporter(new allureReporter({
			   resultsDir:'./node_modules/jasmine-allure-reporter/allure-results'
		   }));
	  },
	  
/*//parallel Testing-multiple browsers:
  multiCapabilities:[
	  {
		  
		  'browserName':'chrome'
	  },
	  {
		  'browserName':'firefox'
	  }
  ],*/
  /*suites: {
	functional:['./src/CalculatorWithFunction.js','./src/CalculatorTwo.js'],
	//for all calculator functional:['./src/Calculator*.js'],
	//for all testscripts groupname:['./src/*.js']
	//for all programs in all packages groupname:['./src/*/
	  //*.js']
	//regression:['./src/Calculator.js']
 // },
	
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
