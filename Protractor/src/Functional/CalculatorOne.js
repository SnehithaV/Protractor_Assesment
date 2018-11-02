describe('Calculator Functional Tests', function() {
  it('Addition', function() {
    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    element(by.model("first")).sendKeys(4);
    element(by.model("second")).sendKeys(4);
    element(by.buttonText("Go!")).click();
   var actual = element(by.binding("latest")).getText();
   expect(actual).not.toBe("9");
    
  });

  });