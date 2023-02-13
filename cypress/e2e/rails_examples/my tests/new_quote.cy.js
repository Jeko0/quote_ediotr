describe("create new quote", () => {
  before(() => {
    cy.login("accountant@kpmg.com", "password");
  });

  it("Displays a title by default", () => {
    cy.get("h1").should("contain", "Quote editor");
    cy.get("p").should(
      "contain",
      "A blazing fast quote editor built with Hotwire"
    );
  });

  it("redirects user to quotes list page", () => {
    cy.get('a[href*="/quotes"]').click();
    cy.url().should("include", "/quotes");
    cy.get("h1").should("contain", "Quotes");
  });

  it("creates a new valid quote", () => {
    cy.get('a[href*="/quotes/new"]').click({ multiple: true, force: true });
    cy.get("#new_quote");
    cy.get('[name="quote[name]"]').type("test");
    cy.get(".btn--secondary").click();
  });

  it("does not create invalid quote", () => {
    cy.get('a[href*="/quotes/new"]').click({ multiple: true, force: true });
    cy.get("#new_quote");
    cy.get('[name="quote[name]"]').type(" ");
    cy.get(".btn--secondary").click();
    cy.get(".error-message")
      .contains(`Name can't be blank`)
      .should("be.visible");
  });

  // it("updates a quote", () => {
  //   cy.get(".quote__actions > a").should("contain", "Edit")
  //   cy.get('#quote_name').type("test1234556");
  //   cy.get(`input[type="submit"]`).click();
  // })

  it("deletes a quote", () => {
    cy.get('button[type=submit]').eq(1).click(); 
  })
});
