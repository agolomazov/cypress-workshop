/// <reference types="Cypress" />

describe('Verify Autocomplete dropdown list viw webdriveruni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#autocomplete-textfield')
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.get('#myInput').as('autocomplete');
    cy.get('#submit-button').as('submitBtn');
  });

  it('Select specific product via autocomplete list', () => {
    cy.get('@autocomplete').type('app');
    cy.get('#myInputautocomplete-list > div').eq(0).click();
    cy.get('@autocomplete').should('have.value', 'Apple');
  });

  it('Select product', () => {
    cy.get('@autocomplete').type('A');
    const testingProduct = 'Avacado';

    cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
      const text = $el.text();
      cy.log(text);

      if (text === testingProduct) {
        // cy.get($el).click();
        // cy.wrap($el).click();
        $el.click();

        cy.get('@submitBtn').click();
        cy.url().should('contain', testingProduct);
      }
    });
  });
});