/// <reference types="Cypress" />

describe('Verify dropdowns via webdrivenuni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('Select specific values via select dropdown lists', () => {
    cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python');
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
    cy.get('#dropdowm-menu-3').select('javascript').should('have.value', 'javascript');
  });
});
