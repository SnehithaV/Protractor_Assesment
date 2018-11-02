var add = function(a,b,op){
element(by.model("first")).sendKeys(a);
//element.all(by.options("value for (key, value) in operators")).then(function(data){
element.all(by.xpath("//select[@class='span1 ng-pristine ng-valid ng-touched']")).then(function(data){
		//here data is just a variable name to hold the value
	data[op].click();
});
element(by.model("second")).sendKeys(b);
element(by.buttonText("Go!")).click();
}

describe('Calculator Functional Tests', function() {
	  it('Basic Functions', function() {
	    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
		add(4,5,0);
		add(2,2,1);
		add(50,50,2);
	});
});