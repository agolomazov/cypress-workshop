/// <reference types="Cypress" />

describe('Handling Iframe & Modals', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });
  });

  it('Handle webdriver iframe and modal', () => {
    cy.get('#frame').then($iframe => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).as('iframe');
    });

    cy.get('@iframe').find('#button-find-out-more').click();

    cy.get('@iframe').find('#myModal').as('modal');
    cy.get('@modal').should($expectedText => {
      const text = $expectedText.text();
      expect(text).contains('Welcome to');
    });

    cy.get('@modal').contains('Close').click();
  });
});