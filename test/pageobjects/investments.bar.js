const highlightText = ".text-jumbo"
const openAccountButton = "span[title='Open an account']"
const transferToUsButton = "span[title='Transfer to us']"
const findOutMoreButton ="//a[@href='/funds']//span[@title='Find out more'][normalize-space()='Find out more']"
const mostPurchasedFundsText = "//h2[normalize-space()='Most purchased funds in May 2023']"
const bestPerformingFundsText = "div[id='best-performing']>h2[class='chakra-heading ii-p64afs']"
 
class InvestmentsBar {
    async getHighlightText()
    {
        return $(highlightText).getText();
    }
    async isDisplayedOpenAccountButton()
    {
        return $(openAccountButton).isDisplayed();
    }
    async isDisplayedTransferToUsButton()
    {
        return $(transferToUsButton).isDisplayed();
    }
    async getMostPurchasedFundsText()
    {
        return $(mostPurchasedFundsText).getText();
    }
    async getBestPerformingFundsText()
    {
        return $(bestPerformingFundsText).getText();
    }
    async isDisplayedFindOutMoreButton()
    {
        return $(findOutMoreButton).isDisplayed();
    }

}
module.exports = new InvestmentsBar()