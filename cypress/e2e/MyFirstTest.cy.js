import AccountInformationPage from "../support/pageObjects/AccountInformationPage";
import HomePage from "../support/pageObjects/HomePage";

describe('E2E Automation Challenge', () => {
  const homePage = new HomePage();
  const accountInfoPage = new AccountInformationPage();

  beforeEach(() => {
    homePage.visitHomePage();
  })

  it('should verify Home page visibility', () => {
    homePage.verifyHomePageVisible();
    homePage.clickHomePageOption();
  })

  it('should click on the Signup/Login button and validate the New User Sign up message', () => {
    homePage.clickSignUpLoginButton();
    homePage.verifyNewUserSignUpMessage();
  })

  it('should type in Name and Email address on the Sign up Form', () => {
    homePage.clickSignUpLoginButton();
    homePage.typeInName('example12');
    homePage.typeInEmail('example12@email.com')
    homePage.clickSignUpButton();
    homePage.verifyEnterAccountInfoMessageVisible();
    accountInfoPage.fillAccountInformation('Mr','contraseña123','1','January','1990','First','Last','Company','Address1','Address2','United States','State','City','12345','123456789');

    homePage.typeInEmailLogin('example12@email.com');
    homePage.typeInPassword('contraseña123');
    homePage.clickLoginButton();
    cy.contains('Logged in as').should('be.visible');

    cy.contains('Delete Account').click();
    homePage.verifyMessageDeleted();

  });


});