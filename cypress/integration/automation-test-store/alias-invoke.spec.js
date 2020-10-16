/// <reference types="Cypress" />

function calculateCart(prices, message) {
  const calculatePrice = prices
    .trim()
    .split('$')
    .filter((item) => {
      return item !== '' && item !== 0;
    })
    .map((price) => +price)
    .reduce((acc, item) => acc + item, 0);
  cy.log(`${message}: ${calculatePrice}`);
  return calculatePrice;
}

describe('Alias and invoke', () => {
  it('Validate a specific hair care product', () => {
    cy.visit('https://www.automationteststore.com/');
    
    cy.get('[href*="product/category&path="]').contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
    cy.get('@productThumbnail').its('length').should('be.gt', 5);
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
  });

  it('Validate product thumbnail', () => {
    cy.visit('https://www.automationteststore.com/');

    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', '16');
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
  });

  it.only('Calculate total of normal and sale products', () => {
    cy.visit('https://www.automationteststore.com/');

    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
    cy.get('@productThumbnail').find('.priceold').invoke('text').as('oldItemPrice');



    cy.get('@itemPrice').then(prices => {
      const calcPrice = calculateCart(prices, 'Total price products');
      expect(calcPrice).to.equal(215.45);
    });

    cy.get('@saleItemPrice').then((prices) => {
      const calcPrice = calculateCart(prices, 'Total sale price products');
      expect(calcPrice).to.equal(357);
    });

    cy.get('@oldItemPrice').then((prices) => {
      const calcPrice = calculateCart(prices, 'Total old price products');
      expect(calcPrice).to.equal(447.5);
    });
  });
});
