describe('Sign in', () => {
  beforeEach(() => {
    cy.visit('/users/sign_in');
  });

  it('signs in user with valid credentials', () => {
    cy.get('[name="user[email]"]').type("accountant@kpmg.com")
    cy.get('[name="user[password]"]').type('password');
    cy.get('[name=commit]').contains('Log in').click();
    cy.location("pathname").should("include", "/");
  });

  it('does not sign in user with invalid credentials', () => {
    cy.get('[name="user[email]"]').type("test@gmail.com")
    cy.get('[name="user[password]"]').type('password');
    cy.get('[name=commit]').contains('Log in').click();
    cy.location("pathname").should("include", "/users/sign_in");
  });
});