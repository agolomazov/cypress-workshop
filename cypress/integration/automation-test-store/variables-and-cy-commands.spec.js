/// <reference types="Cypress" />

describe('Verifying variables, cypress commands and jquery commands', () => {
  // beforeEach(() => {
  //   cy.visit('https://www.automationteststore.com/');
  // });

  it('Navigating to specific product pages', () => {

    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get("a[href*='product/category&path=']").contains('Skincare').click();
  });

  it('Navigating to specific product pages', () => {
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();

     cy.get('h1 .maintext').then($el => {
       const headerText = $el.text();
       cy.log(`Found header text: ${headerText}`);

       expect(headerText).be.eq('Makeup');
     });
  });

  it.only('Validate properties of the Contact Us Page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact');

    // uses cypress commands and chaining
    cy.contains(
      '#ContactUsFrm',
      'Contact Us Form',
    ).find('#field_11')
    .should('contain', 'First name:');

    // JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then($el => {
      const firstNameText = $el.find('#field_11').text().trim();
      cy.log(firstNameText);
      expect(firstNameText).to.contain('First name:');
    });

    // Embedded commands (Closure)
    cy.get('#field_11').then($el => {
      expect($el.text()).to.contain('First name');
    });
  });
});
