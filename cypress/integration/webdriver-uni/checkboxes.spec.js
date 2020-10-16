/// <reference types="Cypress" />

describe('Verify checkboxes via webdrivenuni', () => {
  beforeEach(() => {
    cy.log(Cypress.env("name"));
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('Check and validate checkbox', () => {
    // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

    cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
    cy.get('@option-1').check();
    cy.get('@option-1').should('be.checked');
  });

  it('Uncheck and validate checkbox', () => {
    // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

    cy.get('#checkboxes > :nth-child(5) > input').as('option-5');
    cy.get('@option-5').uncheck();
    cy.get('@option-5').should('not.be.checked');
  });

  it('Multiply check ckeckboxes', () => {
    cy.get('input[type="checkbox"]').as('checkboxes');

    cy.get('@checkboxes').check(['option-1', 'option-2', 'option-4']).should('be.checked');
  });
});
