const { spec, request } = require("pactum");
const baseUrl = "https://practice.expandtesting.com/notes/api";
const { faker } = require("@faker-js/faker");

describe("Login User", () => {
  let authToken = "";

  before(async () => {
    request.setDefaultTimeout(10000);

    const requestBody = {
      email: "Isobel.Wyman38@gmail.com",
      password: "1234567",
    };
    const response = await spec()
      .post(baseUrl + "/users/login")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200)
    authToken = response.body.data.token;
  });

  it("Login user", () => async () => {
    await spec()
      .get(baseUrl + "/users/login")
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200);
  });
});
