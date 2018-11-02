
var data = require(process.cwd()+'/src/Utility/loginPageData.json');
describe('login page',function(){
	it('open login page',function(){
		browser.get(data.url);
	});
});