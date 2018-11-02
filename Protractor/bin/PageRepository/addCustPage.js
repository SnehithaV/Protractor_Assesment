
var addCustPage = function(){
	
	var home = element(by.buttonText("Home"));
	var firstName = element(by.model("fName"));
	var lastName = element(by.model("lName"));
	var postCode = element(by.model("postCd"));
	var addCustomerWithDetails=element(by.xpath("//button[@type='submit']"));
	var openAccount = element(by.xpath("//button[contains(text(),'Open Account')]"));
	var customers = element(by.xpath("//button[contains(text(),'Customers')]"));
	
	this.clickHome=function(){
		home.click();
		return require('./loginPage.js');
	}
	/*this.clickAddCustomer=function(){
		addCustomer.click();
		return require('./addCustPage.js');
	}*/
	this.clickFirstName=function(){
		firstName.sendKeys("Snehitha");
		return this;
	}
	this.clickLastName=function(){
		lastName.sendKeys("V");
		return this;
	}
	this.clickPostCode=function(){
		postCode.sendKeys("95131");
		return this;
	}
	this.clickAddCustomerWithDetails=function(){
		addCustomerWithDetails.click();
	}
	this.acceptAlert=function(){
		browser.switchTo().alert().accept();
		//return this;
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
module.exports = new addCustPage();