
var customerListPage = function(){
	
	var home = element(by.buttonText("Home"));
	var addCustomer = element(by.xpath("//button[contains(text(),'Add Customer')]"));
	var openAccount = element(by.xpath("//button[contains(text(),'Open Account')]"));
	var searchCustomer = element(by.model("searchCustomer"));
	var firstName=element(by.xpath("//tr//td[1]//a[1]"));
	var lastName=element(by.xpath("//tr//td[2]//a[1]"));
	var postCode =element(by.xpath("//tr//td[3]//a[1]"));
	var deletebutton = element(by.xpath("//tbody//tr[3]//td[5]//button[1]"));
	
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
	this.clickSearchCustomer=function(){
		searchCustomer.sendKeys("Harry");
		return this;
	}
	this.clickFirstName=function(){
		firstName.click();
		return this;
	}
	this.clickLastName=function(){
		lastName.click();
		return this;
	}
	this.clickPostCode=function(){
		postCode.click();
		return this;
	}
	this.clickdDeleteButton=function(){
		deletebutton.click();
		return this;
	}

}
module.exports = new customerListPage();