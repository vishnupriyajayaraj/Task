const highlightText = "div[class='ii-1gpd9pw'] h2" //It's better to use data-test-id if exist in the dom, but we need to used dynamic class name as there is no any other references
const sippButton = "span[title='Find out more about the ii SIPP']"
const openSIPPButton = "div[class='ii-12jtpl'] span[title='Open a SIPP']"
const existingMembersButton = "span[title='Existing Pension Trading Account Members']"
const benefitsofSIPPText = "div[class='ii-1mn22qz'] div[class='ii-1sb7ptk'] h2"

class PensionsBar {
    async getHightlightText()
    {
        return $(highlightText).getText();
    }
    async isDisplayedMoreSIPPButton()
    {
        return $(sippButton).isDisplayed();
    }
    async getMoreSIPPButtonText()
    {
        return $(sippButton).getText();
    }
    async isDisplayedExistingMembersButton()
    {
        return $(existingMembersButton).isDisplayed();
    }
    async isDisplayedOpenSIPPButton()
    {
        return $(openSIPPButton).isDisplayed();
    }
    async getOpenSIPPButtonText()
    {
        return $(openSIPPButton).getText();
    }
    async getBenefitsOfSIPPText()
    {
        return $(benefitsofSIPPText).getText();
    }

}
module.exports = new PensionsBar()