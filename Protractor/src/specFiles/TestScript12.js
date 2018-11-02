var data = require(process.cwd()+'/src/Utility/loginPageData.json');
//browser.sleep(2000);
var loginPage=require(process.cwd()+'/src/PageRepository/loginPage.js');
describe('login page',function(){
	it('open login page',function(){
		browser.get(data.url);
		var customerPage = loginPage.clickCustomerLogin();
		customerPage.clickYourName(1);
		var accountPage=customerPage.clickLogin();
		accountPage.welcomeDropDownButton(2);
		var listTxPage=accountPage.clickTransactions();
			
		
		});
});