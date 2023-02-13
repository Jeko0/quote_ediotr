describe("Sign in", () => {
  beforeEach(() => {
    cy.visit("/users/sign_in");
  });

  it("signs in user with valid credentials", () => {
    cy.login("accountant@kpmg.com", "password");
    cy.url().should("eq", "http://localhost:5017/");
  });

  it("does not sign in user with invalid crederntials", () => {
    cy.login("test@mail.com", "password");
    cy.url().should("eq", "http://localhost:5017/users/sign_in");
  });
});
