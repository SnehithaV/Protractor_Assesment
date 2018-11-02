


describe('Calculator Functional Tests', function() {
	
  it('Basic Functions', function() {
    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    element(by.model("first")).sendKeys(4);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
    		//here data is just a variable name to hold the value
    	data[0].click();
    });
    element(by.model("second")).sendKeys(4);
    element(by.buttonText("Go!")).click();
    
    
    element(by.model("first")).sendKeys(2);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
    		//here data is just a variable name to hold the value
    	data[1].click();
    });
    element(by.model("second")).sendKeys(2);
    element(by.buttonText("Go!")).click();
    
    element(by.model("first")).sendKeys(3);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
    		//here data is just a variable name to hold the value
    	data[2].click();
    });
    element(by.model("second")).sendKeys(2);
    element(by.buttonText("Go!")).click();
    
    element(by.model("first")).sendKeys(4);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
    		//here data is just a variable name to hold the value
    	data[3].click();
    });
    element(by.model("second")).sendKeys(1);
    element(by.buttonText("Go!")).click();
    
    //browser.sleep(5000);
  });
});
  
  
  