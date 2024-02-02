class AccountInformationPage {
    fillAccountInformation(title, password, day, month, year, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber){

        cy.get('[data-qa=title] input[value="' + title + '"]').check();


        cy.get('[data-qa=password]').clear().type(password);

        cy.get('[data-qa=days]').select(day);
        cy.get('[data-qa=months]').select(month);
        cy.get('[data-qa=years]').select(year);

        cy.get('[data-qa=first_name]').clear().type(firstName);
        cy.get('[data-qa=last_name]').clear().type(lastName);
        cy.get('[data-qa=company]').clear().type(company);
        cy.get('[data-qa=address]').clear().type(address1);
        cy.get('[data-qa=address2]').clear().type(address2);
        cy.get('[data-qa=country]').select(country);
        cy.get('[data-qa=state]').clear().type(state);
        cy.get('[data-qa=city]').clear().type(city);
        cy.get('[data-qa=zipcode]').clear().type(zipcode);
        cy.get('[data-qa=mobile_number]').clear().type(mobileNumber);

        cy.get('#newsletter').check();
        cy.get('#optin').check();

        cy.get('[data-qa=create-account]').click();
        cy.url().should('include', '/account_created');

        cy.get('[data-qa="account-created"]').should('be.visible');

        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Logged in as').should('be.visible');
        cy.contains('Logout').click();

    }
}

export default AccountInformationPage;