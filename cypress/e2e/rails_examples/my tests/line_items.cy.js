describe("create new date", () => {
  before(() => {
    cy.login("accountant@kpmg.com", "password");
  });

  it("shows specific item", () => {
    cy.get('a[href*="/quotes"]').click();
    cy.url().should("include", "/quotes");
    cy.get('a:contains("Second quote")').click();

  })

  it("creates new line item", () => {
    cy.get('a').contains("Add item").click();
    cy.get('[name="line_item[name]"]').type("beer");
    cy.get('[name="line_item[quantity]"]').type("20");
    cy.get('[name="line_item[unit_price]"]').type("0.3");
    cy.get(`input[type="submit"]`).click();
  })

  it("deletes line item", () => {
    cy.get('.button_to > button:contains("Delete")').last().click();
  })

});