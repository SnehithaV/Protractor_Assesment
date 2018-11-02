var data = require(process.cwd()+'/src/Utility/loginPageData.json');
var loginPage=require(process.cwd()+'/src/PageRepository/loginPage.js');
describe('login page',function(){
	it('open login page',function(){
		browser.get(data.url);
		var managerPage=loginPage.clickBankManagerLogin();
		var openAccountPage=managerPage.clickOpenAccount();
		openAccountPage.clickCustomerName(1);
		openAccountPage.clickCurrency();
		openAccountPage.clickProcess('currancy','pound');
		openAccountPage.acceptAlert();
	});
});