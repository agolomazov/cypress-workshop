/// <reference types="Cypress" />

describe('Test File Upload via webdrivenuni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#file-upload')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('Uploading file...', () => {
    cy.fixture('laptop.png', 'base64').then(fileContent => {
      cy.get('#myFile').attachFile({
        fileContent,
        fileName: 'laptop.png',
        mimeType: 'image/png'
      }, {
        uploadType: 'input',
        force: true
      });

      cy.get('#submit-button').click();
      cy.url().should('contain', 'laptop.png');
    });
  });
});
