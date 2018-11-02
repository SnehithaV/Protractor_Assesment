
var managerPage = function(){
	
	var home = element(by.buttonText("Home"));
	var addCustomer = element(by.xpath("//button[contains(text(),'Add Customer')]"));
	var openAccount = element(by.xpath("//button[contains(text(),'Open Account')]"));
	var customers = element(by.xpath("//button[contains(text(),'Customers')]"));
	
	this.clickHome=function(){
		home.click();
		return require('./loginPage.js');
	}
	
	this.clickAddCustomer=function(){
		addCustomer.click();
		return require('./addCustPage.js');
	}
	this.clickOpenAccount = function(){
		openAccount.click();
		return require('./openAccountPage.js');
	}
	this.clickCustomers = function(){
		customers.click();
		return require('./listPage.js');
	}
}
module.exports = new managerPage();