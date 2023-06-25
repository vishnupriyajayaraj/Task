const allDropdown = '[data-id="discover-navigation"]';
const ediorsPicks = '#menu-list-20-menuitem-7'
const readMoreButton = "button[type='submit']"
const likeAndDislikeIcon = ".ii-9uy14h"

class NewsBar {

    async gotoAllfilters()
    {
        await $(allDropdown).click();
        await $(ediorsPicks).click();
        await browser.back();
        return true;
    }
    async isDisplayedReadMoreButton()
    {
        return $(readMoreButton).isDisplayed();
    }
    async isDisplayedLikeAndDislikeIcon()
    {
        return $(likeAndDislikeIcon).isDisplayed();
    }

}
module.exports = new NewsBar()