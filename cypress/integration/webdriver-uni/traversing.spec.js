/// <reference types="Cypress" />

describe('Test mouse actions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#data-table')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('children() to get the childrent of DOM elements', () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us');
  });

  it('closest() to validate the closest ancestor DOM elements', () => {
    cy.get('.traversal-badge')
      .closest('ul')
      .should('have.class', 'list-group');
  });
});
