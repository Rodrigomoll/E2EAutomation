class HomePage {
    visitHomePage() {
        cy.visit('https://automationexercise.com/');
    }

    clickHomePageOption() {
        cy.get('.nav.navbar-nav').contains('Home').click();
    }

    clickSignUpLoginButton() {
        cy.url().then(url => {
            if (!url.includes('/signup')) {
                cy.contains('Signup / Login').click();
            }
        });
    }

    verifyNewUserSignUpMessage() {
        cy.contains('New User Signup!').should('be.visible');
    }

    typeInName(name) {
        cy.get('[data-qa=signup-name]').type(name);
    }

    typeInEmail(email) {
        cy.get('[data-qa=signup-email]').type(email);
    }

    typeInEmailLogin(email){
        cy.get('[data-qa=login-email]').type(email)
    }

    typeInPassword(password){
        cy.get('[data-qa=login-password]').type(password);
    }

    clickLoginButton(){
        cy.get('[data-qa=login-button').click();
    }

    clickSignUpButton() {
        cy.get('[data-qa=signup-button]').click();
    }

    verifyEnterAccountInfoMessageVisible() {
        cy.get('h2.title.text-center').contains('Enter Account Information').should('be.visible');
    }

    verifyHomePageVisible() {
        cy.url().should('include', '/');
    }

    verifyMessageDeleted(){
        cy.get('[data-qa="account-deleted"]').should('be.visible');
    }
}

export default HomePage;
