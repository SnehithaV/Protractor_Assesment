
var path= require('../../data.json');
describe('Calculator Functional Tests', function() {
	
  it('Basic Functions', function() {
    browser.get(path.url);
    element(by.model("first")).sendKeys(path.Avalue);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
    		//here data is just a variable name to hold the value
    	data[0].click();
    });
    element(by.model("second")).sendKeys(path.Bvalue);
    element(by.buttonText("Go!")).click();
    element(by.binding("latest")).getText().then(function(text){
    	console.log(text);
    })
  });
  
});