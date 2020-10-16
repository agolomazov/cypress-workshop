/// <reference types="Cypress" />

describe('Validate WebdriverUni homepage links', () => {
  it('Confirm links redirect to the correct pages', () => {
    cy.visit('/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

    cy.url().should('contain', 'contactus.html');
    
    cy.go('back');
    cy.reload();

    cy.go('forward');
    cy.url().should('contain', 'contactus.html');

    cy.go('back');
    cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true });
    cy.url().should('contain', 'Login-Portal');

    cy.get('#text').type('cesear@bk.ru', {
      delay: 100
    });

    cy.get('#password').type('password', {
      delay: 100
    }).blur();
  });
});
