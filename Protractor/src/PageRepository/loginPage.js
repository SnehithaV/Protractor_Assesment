
var data = require('../Utility/loginPageData.json');
var loginPage = function(){
	
	var customerLogin = element(by.buttonText('Customer Login'));
	var bankManagerLogin = element(by.buttonText('Bank Manager Login'));
	
	this.clickCustomerLogin=function(){
		customerLogin.click();
		return require('./customerPage.js');
	}
	
	this.clickBankManagerLogin = function(){
		bankManagerLogin.click();
		return require('./managerPage.js');
	}
}

module.exports = new loginPage();