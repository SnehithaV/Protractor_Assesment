
var openAccountPage = function(){
	
	var home = element(by.buttonText("Home"));
	var addCustomer = element(by.xpath("//button[contains(text(),'Add Customer')]"));
	var customers = element(by.xpath("//button[contains(text(),'Customers')]"));
	var customerName = element.all(by.repeater("cust in Customers"));
	var currency = element.all(by.model("currency"));
	
	var process = element(by.buttonText("Process"));
	
	this.clickHome=function(){
		home.click();
		return require('./loginPage.js');
	}
	this.clickAddCustomer=function(){
		addCustomer.click();
		return require('./addCustPage.js');
	}
	this.clickCustomers = function(){
		customers.click();
		return require('./listPage.js');
	}
	this.clickCustomerName = function(index){
		customerName.get(index).click();
		return this;
	}
	this.clickCurrency = function(index){
		currency.get(index).click();
		return this;
	}
	/*this.clickCurrency = function(selectObj,valueToSet){
	for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }    
	} 
	}*/
	this.clickProcess=function(){
		process.click();
	}
	this.acceptAlert=function(){
		browser.switchTo().alert().accept();
	}
	
}

module.exports = new openAccountPage();