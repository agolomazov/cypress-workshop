/// <reference types="Cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {
  beforeEach(() => {
    cy.visit('https://www.automationteststore.com/');
  });

  it('Click on the first item using item header', () => {
    cy.get(
      '#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname'
    ).click();
  });

  it('Click on the first item using item text', () => {
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(itemHeaderText => {
      console.log('Selected the following item:', itemHeaderText.text());
    });
  });

  it('Click on the first item using index', () => {
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]'
    ).parent('li').trigger('mouseenter', 'center');

    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
