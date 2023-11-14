const { spec, request } = require("pactum");
const baseUrl = "https://practice.expandtesting.com/notes/api";
const getAllNotesSchema = require("../api_tests/data/response/get-all-notes-schema");

describe("Get all notes suite", () => {
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

  it("Get all notes", async () => {
    await spec()
      .get(baseUrl + "/notes")
      .expectStatus(200)
      .withHeaders("X-Auth-Token", authToken)
      .expectJsonSchema(getAllNotesSchema)
  });
});
