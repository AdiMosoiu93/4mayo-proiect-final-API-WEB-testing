const { spec, request } = require("pactum");
const baseUrl = "https://practice.expandtesting.com/notes/api/api-docs/#";

describe("", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Deletes note by id", async () => {
    const notesId = 1;

    await spec().delete(`${baseUrl}/notes/${notesId}`).expectStatus(200);
  });
});
