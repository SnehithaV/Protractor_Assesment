var add = function(a,b,op){
element(by.model("first")).sendKeys(a);
element.all(by.options("value for (key, value) in operators")).then(function(data){
		//here data is just a variable name to hold the value
	data[op].click();
});
element(by.model("second")).sendKeys(b);
element(by.buttonText("Go!")).click();
}

describe('Calculator Functional Tests', function() {
	  xit('printing all row data', function() {
	    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
		add(4,5,0);
		add(2,2,1);
		add(50,50,2);
		
		element.all(by.repeater("result in memory")).then(function(data){
			for(i=0;i<data.length;i++){
				data[i].getText().then(function(text){
					console.log(text);
				});
			}
		});
	});
	  
	  
	  xit('printing all row data', function() {
		    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
			add(4,5,0);
			add(2,2,1);
			add(50,50,2);
			
			element.all(by.repeater("result in memory")).then(function(data){
				//for(i=0;i<data.length;i++){
					data[1].getText().then(function(text){
						console.log(text);
					});
				//}
			});
		});
	  //or
	  it('printing all row data', function() {
		    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
			add(4,5,0);
			add(2,2,1);
			add(50,50,2);
			
			element.all(by.repeater("result in memory").row(1)).getText().then(function(data){
				//for(i=0;i<data.length;i++){
					//data[1].getText().then(function(text){
						console.log(data);
					//});
				//}
			});
		});
	  
	  //printing only last column
	 
	  it('printing column data', function() {
		    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
			add(4,5,0);
			add(2,2,1);
			add(50,50,2);
			
			element.all(by.repeater("result in memory").column('result.value')).getText().then(function(data){
						console.log(data);
			});
		});
	  
});