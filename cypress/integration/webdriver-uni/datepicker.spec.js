/// <reference types="Cypress" />

describe('Test Datepicker via webdriverini', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#datepicker')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    
    cy.get('.input-group-addon').click();
  });

  it('Select date from datepicker', () => {
    let date = new Date();
    date.setDate(date.getDate() + 5);
    cy.log(date.getDate());

    
    cy.get('.datepicker tbody td').each($el => {
      const elText = $el.text();
      
      if (date.getDate() == elText) {
        $el.click();
      }
    });

    cy.get('.datepicker').should('not.be.visible');
  });

  it('Test switch years', () => {
    cy.get(
      '.datepicker-days > .table-condensed > thead > :nth-child(1) > .datepicker-switch'
    ).click();

    cy.get(
      '.datepicker-months > .table-condensed > thead > tr > .datepicker-switch'
    ).click();
  });
});
