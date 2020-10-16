/// <reference types="Cypress" />

describe('Add multiple items to basket', () => {
  before(function() {
    cy.fixture('products').then(data => {
      globalThis.data = data;
    })
  });

  beforeEach(function() {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('https://www.automationteststore.com/');
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
  });

  it('Add specific items to basket', () => {
    data.productName.forEach(function(product) {
      cy.addProductToBasket(product);
    });

    cy.get('.dropdown-toggle > .fa').click();
  });
});