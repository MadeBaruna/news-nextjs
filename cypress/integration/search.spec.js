/// <reference types="Cypress" />

context("Search Test", () => {
  it("Go to search", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test="search-button"]').first().click();
    cy.url().should('include', '/search');
  });

  it("Search a query and result 20 items", () => {
    cy.visit("http://localhost:3000/search");
    cy.get('[data-test="search-input"]').type('bitcoin{enter}');
    cy.get('[data-test="article-item"]').should('have.length', 20);
  });

  it("Load more search result", () => {
    cy.visit("http://localhost:3000/search");
    cy.get('[data-test="search-input"]').type('bitcoin{enter}');
    cy.get('[data-test="article-item"]').should('have.length', 20);

    cy.scrollTo('bottom');
    cy.get('[data-test="article-item"]').should('have.length', 40);

    cy.scrollTo('bottom');
    cy.get('[data-test="article-item"]').should('have.length', 60);
  });
});
