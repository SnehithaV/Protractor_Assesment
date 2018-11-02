
	describe('Calculator Functional Tests', function() {

	beforeEach(function(){
	browser.get("http://www.way2automation.com/angularjs-protractor/calc/");	
	});
	
	afterEach(function(){
		console.log("end of test");
	});
	
  it('Multiplication', function() {
    
    element(by.model("first")).sendKeys(4);
    //element.all(by.options("value for (key, value) in operators")).then(function(data){
    		//here data is just a variable name to hold the value
    //element.all(by.css("select option")).then(function(data){
    $$("select option").then(function(data){
    	data[3].click();
    });
    browser.sleep(3000);
    element(by.model("second")).sendKeys(4);
    element(by.buttonText("Go!")).click();
   var actual = element(by.binding("latest")).getText();
   expect(actual).toBe("16");
    
  });
  
  //x in front of it block means this it block is disabled(not to be executed)
  xit('Substraction', function() {
	    element(by.model("first")).sendKeys(4);
	    element.all(by.options("value for (key, value) in operators")).then(function(data){
	    		//here data is just a variable name to hold the value
	    	data[4].click();
	    });
	    browser.sleep(3000);
	    element(by.model("second")).sendKeys(2);
	    element(by.buttonText("Go!")).click();
	   var actual = element(by.binding("latest")).getText();
	   expect(actual).toBe("2");
	    
	  });
  
  
  xit('Modulus', function() {
	    element(by.model("first")).sendKeys(4);
	    element.all(by.options("value for (key, value) in operators")).then(function(data){
	    		//here data is just a variable name to hold the value
	    	data[2].click();
	    });
	    browser.sleep(3000);
	    element(by.model("second")).sendKeys(5);
	    element(by.buttonText("Go!")).click();
	   var actual = element(by.binding("latest")).getText();
	   expect(actual).toBe("4");
	    
	  });
  });