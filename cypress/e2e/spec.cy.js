/* eslint-disable no-undef */
describe("when we try to enter in the homepage without login", () => {
  it("we 'll be resend to login page", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "/login");
  });
});
describe("when we try to login with wrong password", () => {
  it("no works", () => {
    cy.get(".username").type("tim").should("have.value", "tim");
    cy.get(".password").type(124);
    cy.reload();
  });
});

describe("when we try to login with correct values", () => {
  it("works and we will be send to homepage ", () => {
    cy.get(".username").type("tim").should("have.value", "tim");
    cy.get(".password").type(123).should("have.value", 123);
    cy.get(".login").should("have.class", "login");
    cy.get(".login").click();
    cy.url().should("include", "/");
  });
});
describe("we can move in different routes and the logout", () => {
  it("works", () => {
    cy.visit("http://localhost:3000/rooms");
    cy.url().should("include", "/rooms");
    cy.get(".logout").should("have.class", "logout");
    cy.get(".logout").click();
  });
});
