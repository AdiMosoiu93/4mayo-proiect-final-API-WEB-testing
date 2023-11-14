/// <reference types="cypress" />
import navigationBar from "../pages/navigationBar";

describe("Login", () => {
  let data;
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    // cy.viewport('macbook-15')
    cy.fixture("login").then((value) => {
      data = value;
    });
  });

  it("Logout", () => {
    navigationBar.getLoginRegisterButton().click();
    cy.get("#loginFrm_loginname").type(data.loginName);
    cy.get("#loginFrm_password").type(data.password);
    cy.get("button").contains("Login").click();
    cy.get("#topnav select.form-control").select("Logout");
    cy.get("p")
      .contains(
        "You have been logged off your account. It is now safe to leave the computer."
      )
      .should("be.visible");
  });

  it("Edit account", () => {
    navigationBar.getLoginRegisterButton().click();
    cy.get("#loginFrm_loginname").type(data.loginName);
    cy.get("#loginFrm_password").type(data.password);
    cy.get("button").contains("Login").click();
    cy.contains("Edit account details").click({ force: true });
    cy.get("#AccountFrm_firstname").clear().type("Adi");
    cy.get("button").contains("Continue").click();
    cy.get(".alert-success")
      .contains("Success: Your account has been successfully updated.")
      .should("be.visible");
  });
});
