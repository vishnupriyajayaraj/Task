const accptButton = '//button[text()="Accept"]'
const servicerBar = 'span[title = "Services"]'
const pensionsBar =  'span[title = "Pensions"]'
const tradinglink =  '=Trading Account'
const pensionTradinglink =  '=Pension Trading Account'
const topFundslink =  '=Top funds'
const helpCentrelink =  '=Help Centre'
const investmentsBar = 'span[title = "Investments"]'
const helpBar = 'span[title = "Help & learning"]'
const newsBar = 'span[title = "News"]'

class HomePage {
    async acceptCookies()
    {
        await $(accptButton).click();
    }
    async goToServicesBar()
    {
        await $(servicerBar).click()
    }
    async goToPensionsBar()
    {
        await $(pensionsBar).click()
    }
    async goToInvestmentsBar()
    {
        await $(investmentsBar).click()
    }
    async goToHelpBar()
    {
        await $(helpBar).click()
    }
    async goToNewsBar()
    {
        await $(newsBar).click()
    }
    async goToTradingAccount()
    {
        await $(tradinglink).click();
    }
    async goToPensionTradingAccount()
    {
        await $(pensionTradinglink).click();
    }
    async goToTopFunds()
    {
        await $(topFundslink).click();
    }
    async goToHelpCentre()
    {
        await $(helpCentrelink).click();
    }

}
module.exports = new HomePage();