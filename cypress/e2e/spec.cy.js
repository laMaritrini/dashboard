/* eslint-disable no-undef */
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".username").type("tim").should("have.value", "tim");
    cy.get(".password").type(124).should("have.value", 124);
    cy.get(".sc-llJcti").click();
    cy.visit("http://localhost:3000/");
    cy.get(".username").type("tim").should("have.value", "tim");
    cy.get(".password").type(123).should("have.value", 123);
    cy.get(".sc-llJcti").click();
    cy.get(":nth-child(3) > .sc-fnykZs").click();
    cy.get(":nth-child(2) > .sc-fnykZs").click();
    cy.get(":nth-child(1) > .sc-fnykZs").click();

    cy.get(".fa-arrow-right-from-bracket").click();
  });
});
