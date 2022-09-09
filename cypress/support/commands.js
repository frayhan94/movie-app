// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('showModalBoxPicture', () => {
  cy.get('#tbl_photo img.materialboxed').first().click()
  cy.get('.modal.open')
  cy.get('#btn_close').click()
})

Cypress.Commands.add('clickPaginationElement', () => {
  cy.get('.pagination-item').contains('2').click()
  cy.get('#ul_pagination .pagination-item').first().click()
  cy.get('#ul_pagination .pagination-item').last().click()
})


Cypress.Commands.add('showDataFoundAfterSearch', () => {
  cy.get('#txt_search_movie').type('a')
  cy.get('#tbl_photo').should('be.visible')
  cy.get('#tbl_photo').children()
})

Cypress.Commands.add('showNoDataFoundAfterSearch', () => {
  cy.get('#txt_search_movie').type('faris')
  cy.get('#td_no_data_found').should('be.visible')
})



