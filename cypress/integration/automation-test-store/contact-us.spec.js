/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('a[href$="contact"]').click().then(linkElement => {
      cy.log('You clicked by link with text', linkElement.text());
    });

    // cy.xpath("//a[contains(@href, 'contact')]").click();

    cy.get('#ContactUsFrm_first_name').type('Joe');

    cy.get('#ContactUsFrm_email').type('joe_blogs@mail.it');
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');

    cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders?');

    cy.get('.col-md-6 > .btn').click();

    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!'
    );
  });
});
