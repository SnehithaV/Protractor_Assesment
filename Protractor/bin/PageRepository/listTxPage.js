
var listTxPage = function(){
	var home = element(by.buttonText("Home"));
	var logout = element(by.buttonText("Logout"));
	var back = element(by.xpath("//button[contains(text(),'Back')]"));
	var reset = element(by.xpath("//button[contains(text(),'Reset')]"));
	
	this.clickHome=function(){
		home.click();
		return require('./loginPage.js');
	}
	this.clickLogout=function(){
		logout.click();
		return require('./customerPage.js');
	}
	this.clickBack=function(){
		back.click();
		return require('./accountPage.js');
	}
	this.clickReset=function(){
		reset.click();
		return this;
	}
}
module.exports = new listTxPage();