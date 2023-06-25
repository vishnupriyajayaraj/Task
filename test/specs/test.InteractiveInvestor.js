const { expect } = require('chai');
const assert = require('chai').assert;
const baseUrl= process.env.BASE_URL
const servicesBar = require('../pageobjects/services.bar')
const pensionsBar = require('../pageobjects/pensions.bar')
const homePage = require('../pageobjects/home.page')
const investmentsBar = require('../pageobjects/investments.bar');
const helBar = require('../pageobjects/help.bar');
const newsBar = require('../pageobjects/news.bar')

describe('User Journey Tests', () => {
    it('Test user journey on Services page', async () => {
        //go to the URL to be tested
        await browser.url(baseUrl);
        // Maximize the window
        browser.maximizeWindow();
        // accept cookies in the home page
        await homePage.acceptCookies();

        // Click on the Services Bar
        await homePage.goToServicesBar();

        //From the dropdown go to Trading Account link
        await homePage.goToTradingAccount();
        
        // Verify page URL and content
        expect(await browser.getUrl()).to.equal('https://www.ii.co.uk/ii-accounts/trading-account');
        expect(await servicesBar.getHighlightText()).to.equal('Open a Trading Account and get £50 free trading credit');

        assert.isTrue(await servicesBar.isDisplayedOpenAccountButton());
        assert.equal(await servicesBar.getOpenAccountButtonText(),'Open an account');
        
        expect(await servicesBar.getOpenAccountPageTitle()).to.equal('Account Opening - interactive investor');

        await browser.back();

        expect(await servicesBar.isDisplayedTransferToUsButton()).to.equal(true);
        expect(await servicesBar.getTransferToUsButtonText()).to.equal('Transfer to us');
        expect(await servicesBar.whyTradingAccountText()).to.equal('Why choose an ii Trading Account?');
        expect(await servicesBar.openATradingAccountPageTitle()).to.equal('Account Opening - interactive investor');

        await browser.back();

        expect(await servicesBar.isDisplayedExistCustomerLoginButton()).to.equal(true);
        expect(await servicesBar.isClickableFAQs()).to.equal(true);
    })
    it('Test user journey on Pensions Page', async () => {
         //Click on Pensions bar
         await homePage.goToPensionsBar();

         //From the dropdown go to Trading Account link
         await homePage.goToPensionTradingAccount();
 
         // Verify page URL and contents
         expect(await browser.getUrl()).to.equal('https://www.ii.co.uk/ii-accounts/pension-trading-account');
         expect(await pensionsBar.getHightlightText()).to.equal("Pension Trading Account");
         expect(await pensionsBar.isDisplayedMoreSIPPButton()).to.equal(true);
         expect(await pensionsBar.isDisplayedMoreSIPPButton()).to.equal(true);
         expect(await pensionsBar.getMoreSIPPButtonText()).to.equal("Find out more about the ii SIPP");
         expect(await pensionsBar.isDisplayedExistingMembersButton()).to.equal(true);
         expect(await pensionsBar.isDisplayedOpenSIPPButton()).to.equal(true);
         expect(await pensionsBar.getOpenSIPPButtonText()).to.equal("Open a SIPP");
         expect(await pensionsBar.getBenefitsOfSIPPText()).to.equal("Benefits of our SIPP");
    })

    it('Test user journey on Investments Page', async () => {
       //Click on Investments bar
       await homePage.goToInvestmentsBar();

       //From the dropdown go to Top funds link
       await homePage.goToTopFunds();

       // Verify page URL and contents
       expect(await browser.getUrl()).to.equal('https://www.ii.co.uk/funds/top-investment-funds');
       expect(await investmentsBar.getHighlightText()).to.equal('Top investment funds');
       expect(await investmentsBar.isDisplayedOpenAccountButton()).to.equal(true);
       expect(await investmentsBar.isDisplayedTransferToUsButton()).to.equal(true);
       expect(await investmentsBar.getMostPurchasedFundsText()).to.contain("Most purchased funds in");
       expect(await investmentsBar.getBestPerformingFundsText()).to.equal("Best performing funds");
       expect(await investmentsBar.isDisplayedFindOutMoreButton()).to.equal(true);

   })

   it('Test user journey on Help & Learning Page', async () => {
        //Click on Help & Learning bar
        await homePage.goToHelpBar();

        //From the dropdown go to Help Centre
        await homePage.goToHelpCentre();

        // Verify page URL and contents
        expect(await browser.getUrl()).to.equal('https://www.ii.co.uk/help');
        expect(await helBar.isDisplayedSearchButton()).to.equal(true);
        expect(await helBar.goToTransfersArticle("Transfers")).to.equal(true);
        expect(await helBar.goToHelpBreadCrumb()).to.equal(true);
        expect(await helBar.goToCareers()).to.equal(true);

})
it('Test user journey on News Page', async () => {
         //Click on News bar
        await homePage.goToNewsBar();

        // Verify page URL
        expect(await browser.getUrl()).to.equal('https://www.ii.co.uk/stock-market-news');
        expect(await newsBar.gotoAllfilters() ).to.equal(true);
        expect(await newsBar.isDisplayedReadMoreButton()).to.equal(true);
        expect(await newsBar.isDisplayedLikeAndDislikeIcon()).to.equal(true);
        
})
})