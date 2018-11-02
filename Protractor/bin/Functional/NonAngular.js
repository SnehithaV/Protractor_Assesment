describe('Non Angular page test', function() {
	
  it('testing', function() {
	browser.ignoreSynchronization=true;
	browser.get("https://login.salesforce.com");
    element(by.id("username")).sendKeys("UserName");
    browser.sleep(2000);
    });
});