describe("new date", () => {
  before(() => {
    cy.login("accountant@kpmg.com", "password");
  });

  it("shows specific item", () => {
    cy.get('a[href*="/quotes"]').click();
    cy.url().should("include", "/quotes");
    cy.get('a:contains("Second quote")').click();

  })

  it("creates new date", () => {
    cy.get('a:contains("New date")').click();
    cy.get('[name="line_item_date[date]"]').type("2023-02-23")
    cy.get('input[type="submit"]')
    .contains('Create date')
    .click();
  }) 

  // it("edits date", () => {
  //   cy.get('a').contains("Edit").click()
  //   cy.get('input').contains("2023-02-23").type('2023-02-24')
  // })

  // it("deletes date", () => {
  //   cy.get('button[type="submit"]').contains("Delete").click();
  // })
});
