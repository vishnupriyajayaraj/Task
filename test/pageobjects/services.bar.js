const highlightText = "div[class='ii-1mn22qz'] div[class='ii-ardtul'] h2"
const openAccountButton = "span[title='Open an account']"
const transferToUsButton = "span[title='Transfer to us']"
const whyTradingAccountText= "div[class='ii-19kun6q'] h2"
const openTadingAccountButton= "(//span[@title='Open a Trading Account'][normalize-space()='Open a Trading Account'])[1]" //better to use css selector ,but here the css selector is too long
const existCustomerLoginButton= "span[title='Log in to open a Trading Account']"
const faqButtons = "#accordion-button-"

class ServicesBar {
    async getHighlightText()
    {
        return $(highlightText).getText();
    }
    async isDisplayedOpenAccountButton()
    {
        return $(openAccountButton).isDisplayed();
    }
    async getOpenAccountButtonText()
    {
        return $(openAccountButton).getText();
    }
    async getOpenAccountPageTitle()
    {
        await $(openAccountButton).click();
        return browser.getTitle();
    }
    async isDisplayedTransferToUsButton()
    {   
        return $(transferToUsButton).isDisplayed();
    }
    async getTransferToUsButtonText()
    {
        return $(transferToUsButton).getText();
    }
    async whyTradingAccountText()
    {
        return $(whyTradingAccountText).getText();
    }
    async openATradingAccountPageTitle()
    {
        await $(openTadingAccountButton).click();
        return browser.getTitle();
    }
    async isDisplayedExistCustomerLoginButton()
    {
        return $(existCustomerLoginButton).isDisplayed();
    }
    async existCustomerLoginPageTitle()
    {
        await $(existCustomerLoginButton).click();
        return browser.getTitle();
    }
    async isClickableFAQs()
    {
        let id = 9;
        let flag;
        let i;
        for(i = 6; i<=id ;i++)
        {
        flag =0;
        await $(`${faqButtons}${i}`).click();
        flag = 1;
        }
        if(i==10 && flag==1) return true;
    }
}
module.exports = new ServicesBar()