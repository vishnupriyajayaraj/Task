const searchButton = "button.chakra-button.css-1aov4cy" // it's better to use non dynamic class name
const searchField = "input[placeholder='Article search']"
const internalTransfers = "//p[normalize-space()='Internal transfers']"
const helpBreadCrumb = "//a[normalize-space()='Help']"
const careersLink = "//a[normalize-space()='Careers']"

class HelpBar {
    async isDisplayedSearchButton()
    {
        await browser.pause(2000);  //taking time to load the webpage
        return $(searchButton).isDisplayed();
    }
    async goToTransfersArticle(article)
    {
        await $(searchButton).click();
        await $(searchField).setValue(article);
        await $(internalTransfers).click();
        return true;
    }
    async goToHelpBreadCrumb()
    {
        await $(helpBreadCrumb).click();
        return true;
    }
    async goToCareers()
    {
        await $(careersLink).click();
        return true;
    }

}
module.exports = new HelpBar();