describe('Testing Home page', () => {  
  
  beforeEach(() => {  
    cy.visit('/')  
  })  
  
  it('Displays a title by default', () => {  
    cy.get('h1').should('contain', 'Quote editor')  
    cy.get('p').should('contain', 'A blazing fast quote editor built with Hotwire')
  })  
  
  it('redirects user to sign in form', () => {
    cy.get('.btn--dark').first().click();
    cy.url().should('include', '/users/sign_in');    
   })   
})  