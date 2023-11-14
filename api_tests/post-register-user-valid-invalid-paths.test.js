const { spec, request } = require("pactum");
const baseUrl = "https://practice.expandtesting.com/notes/api";
const { faker } = require("@faker-js/faker");

describe("Create/Register User suite, valid and invalid paths", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Register user", async () => {
    const randomUsername = faker.word.noun(7);
    const randomEmail = faker.internet.email();
    const requestBody = {
      name: randomUsername,
      email: randomEmail,
      password: "1234567",
    };

    await spec()
      .post(baseUrl + "/users/register")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(201);
  });

  it("Register user; invalid scenario", async () => {
    const randomEmail = faker.internet.email();
    const requestBody = {
      email: randomEmail,
      password: "qsd",
    };

    await spec()
      .post(baseUrl + "/users/register")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(400)
      .expectJsonLike({
        message: "User name must be between 4 and 30 characters",
      });
  });
});
