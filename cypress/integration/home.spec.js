/* eslint-disable no-undef */
describe('Photo App Basic Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Window should be able to scroll', () => {
    cy.scrollTo(0, 1000) // Scroll the window 500px down
  })

  it('Should see basic element', () => {
    /*text search*/
    cy.get('#txt_search_movie').should('be.visible')
    cy.get('#tbl_photo').should('be.visible')
    /*table photo*/
    cy.get('#ul_pagination').should('be.visible')
    /*pagination*/
  })
  it('Can type on search textfield', () => {
    /*text search*/
    cy.get('#txt_search_movie').type("faris").clear()
  })

  it('Table has children', () => {
    cy.get('#tbl_photo').children()
  })

  it('Number pagination can be clicked', () => {
    cy.scrollTo(0, 1000) // Scroll the window 500px down
    cy.clickPaginationElement()
  })


  it('Show modal photo', () => {
    cy.showModalBoxPicture()
  })

  it('Show no data found after search', () => {
    cy.showNoDataFoundAfterSearch()
  })

  it('Show  data found after search', () => {
    cy.showDataFoundAfterSearch()
  })


  it('Test responsiveness', () => {
    const device = [
      {
        device: 'iphone-x',
        device: 'iphone-8',
        device: 'iphone-7',
        device: 'iphone-xr'
      },
    ]
    cy.wrap(device)
      .each(filter => {
        cy.viewport(filter.device)
        cy.clickPaginationElement()
        cy.showModalBoxPicture()
      })
  })

})
