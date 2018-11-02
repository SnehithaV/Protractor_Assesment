
var accountPage = function(){
	
	var welcomeDropDown = element.all(by.options("account for account in Accounts"));
	//data[0].click();
	var home = element(by.buttonText("Home"));
	var logout = element(by.buttonText("Logout"));
	var transaction = element(by.xpath("/html/body/div[3]/div/div[2]/div/div[3]/button[1]"));

	var withdraw = element(by.xpath("/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[3]/button[3]"));
	var amountToBeWithdrawn = element(by.xpath("//input[@placeholder='amount']"));
	var withdrawAmount = element(by.xpath("//button[@type='submit']"));
	
	var deposit = element(by.xpath("/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[3]/button[2]"));
	var amountToBeDeposited = element(by.model("amount"));
	var depositAmount = element(by.xpath("//button[@type='submit']"));
	
	
	
	this.welcomeDropDownButton=function(index){
		welcomeDropDown.get(index).click();
		return this;
	}
	
	this.clickHome=function(){
		home.click();
		return require('./loginPage.js');
	}
	
	this.clickLogout=function(){
		logout.click();
		return require('./customerPage.js');
	}
	
	this.clickTransactions=function(){
		transaction.click();
		return require('./listTxPage.js');
	}
	
	this.clickDeposit=function(){
		deposit.click();
		return this;
	}
	
	this.enterAmount=function(){
		amountToBeDeposited.sendKeys("1000");
		return this;
	}
	
	this.clickDepositAmount = function(){
		depositAmount.click();
		return this;
	}
	
	this.withdrawAmount=function(){
		withdraw.click();
		return this;
	}
	
	this.enterAmountToWithdraw=function(){
		amountToBeWithdrawn.sendKeys("1000");
		return this;
	}
	this.clickWithdrawAmount = function(){
		withdrawAmount.click();
		return this;
	}
}
module.exports = new accountPage();