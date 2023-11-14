const { spec, request } = require("pactum");
const baseUrl = "https://practice.expandtesting.com/notes/api";

describe("Post notes", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Creare nota noua", async () => {
    const requestBodyNotes = {
      title: "API-4mayo",
      description: "Testing API 4mayo",
      category: "Home",
    };

    const requestBody = {
      email: "Isobel.Wyman38@gmail.com",
      password: "1234567",
    };
    const response = await spec()
      .post(baseUrl + "/users/login")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
    authToken = response.body.data.token;

    await spec()
      .post(baseUrl + "/notes")
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBodyNotes)
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200);
  });
});
