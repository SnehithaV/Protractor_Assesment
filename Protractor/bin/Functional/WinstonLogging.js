var winston=require('winston');
winston.add(new winston.transports.File({filename:'./reports/logInfo.log',handleExceptions:true}));
describe('Calculator Functional Tests', function() {
	  it('Addition', function() {
	    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
	    winston.log('info','started testscript execution')
	    winston.log('error','something went wrong')
	  });
});
