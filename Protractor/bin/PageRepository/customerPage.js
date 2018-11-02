
var customerPage = function(){
	
	var yourName = element.all(by.repeater("cust in Customers"));
	//data[0].click();
	var login = element(by.buttonText("Login"));
	var home = element(by.buttonText("Home"));
	
	this.clickYourName=function(index){
		yourName.get(index).click();
		return this;
	}
	
	this.clickLogin=function(){
		login.click();
		return require('./accountPage.js');
	}
	
	this.clickHome=function(){
		home.click();
		return require('./loginPage.js');
	}
}

module.exports = new customerPage();