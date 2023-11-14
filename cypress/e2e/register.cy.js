/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");
import navigationBar from "../pages/navigationBar";

describe("Register suite", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  it("Register new user", () => {
    const loginName = faker.internet.userName();

    navigationBar.getLoginRegisterButton().click();
    cy.get("button").contains("Continue").click();
    cy.get("#AccountFrm_firstname").type(faker.person.firstName());
    cy.get("#AccountFrm_lastname").type(faker.person.lastName());
    cy.get("#AccountFrm_email").type(faker.internet.email());
    cy.get("#AccountFrm_address_1").type(faker.location.secondaryAddress());
    cy.get("#AccountFrm_city").type("Bucharest");
    cy.get("#AccountFrm_zone_id").select("3513");
    cy.get("#AccountFrm_postcode").type("123456");
    cy.get("#AccountFrm_loginname").type(loginName);
    cy.log("loginName");
    cy.get("#AccountFrm_password").type("12345");
    cy.get("#AccountFrm_confirm").type("12345");
    cy.get("#AccountFrm_agree").check();
    cy.get("button").contains("Continue").click();
    cy.get(".maintext")
      .contains("Your Account Has Been Created!")
      .should("be.visible");
  });
});
