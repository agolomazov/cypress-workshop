/// <reference types="Cypress" />

describe('Verify radio-buttons via webdrivenuni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('Check and validate radio-buttons', () => {
    cy.get('#radio-buttons').find('[type="radio"]').eq(1).should('have.attr', 'value', 'blue').check().should('be.checked');
  });
});
