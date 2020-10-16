import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';

/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  const contactUsPO = new Contact_Us_PO();
  const homepagePO = new HomePage_PO();

  before(() => {
    cy.fixture('example').then(data => {
      globalThis.data = data;
    });

    cy.fixture('userDetails').as('user');
  });

  beforeEach(() => {
    // cy.navigateTo_WebdriverUni_Homepage();
  
    homepagePO.visitHomepage();
    homepagePO.clickOn_ContactUs_Button();
  });


  it('Should be able to submit a successful submission via contact us form', () => {
    // cypress code
    
    // проверяем кодировку
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');

    // проверяем название страницы
    cy.title().should('include', 'WebDriver | Contact Us');

    // проверяем текущий адрес страницы
    cy.url().should('include', 'contactus.html');

    // cy.webdriverUni_ContactForm_Submittion(
    //   Cypress.env('first_name'),
    //   data.last_name,
    //   data.email,
    //   data.body,
    //   'h1',
    //   'Thank You for your Message!'
    // );

    contactUsPO.contactForm_Submittion(
      Cypress.env('first_name'),
      data.last_name,
      data.email,
      data.body,
      'h1',
      'Thank You for your Message!'
    );
  });

  it('Should not be able to submit a successful submission via contact us form as all fileds are required', function() {
    // cy.webdriverUni_ContactForm_Submittion(
    //   data.first_name,
    //   data.last_name,
    //   ' ',
    //   data.body,
    //   'body',
    //   'Error: Invalid email address'
    // );

    contactUsPO.contactForm_Submittion(
      data.first_name,
      data.last_name,
      ' ',
      data.body,
      'body',
      'Error: Invalid email address'
    );
  });
});