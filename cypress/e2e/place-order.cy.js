/// <reference types="cypress" />
import navigationBar from "../pages/navigationBar";

describe("Place Order suite", () => {
  let data;
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.fixture("login").then((value) => {
      data = value;
    });
  });

  it("Place order", () => {
    // Login
    navigationBar.getLoginRegisterButton().click();
    cy.get("#loginFrm_loginname").type(data.loginName);
    cy.get("#loginFrm_password").type(data.password);
    cy.get("button").contains("Login").click();
    // Go to Homepage
    navigationBar.getHomeButton().click();
    // Add first product to cart
    cy.get('#featured [data-id="50"]').click();
    // Go to cart
    cy.get('li[data-id="menu_cart"]').contains("Cart").click({ force: true });
    // Checkout
    cy.get("#cart_checkout1").click();
    cy.get("#checkout_btn").click();
    // Assert text
    cy.get(".maintext")
      .contains(" Your Order Has Been Processed!")
      .should("be.visible");
  });
});
