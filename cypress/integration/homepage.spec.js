/// <reference types="Cypress" />

context("Homepage Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it("General menu should be selected", () => {
    cy.get('[data-test="category-item"]').first().should('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it("Listing 20 item on load", () => {
    cy.get('[data-test="article-item"]').should('have.length', 20);
  });

  it("load more on scroll", () => {
    cy.scrollTo('bottom');
    cy.get('[data-test="article-item"]').should('have.length.not.be.at.least', 21);
  });

  it("Load other category", () => {
    cy.get('[data-test="category-item"]').eq(2).click();
    cy.get('[data-test="category-item"]').eq(2).should('have.css', 'color', 'rgb(255, 0, 0)');
  });
});
