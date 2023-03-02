import { handleRequest } from "./";

const Args = {
  MY_ARG: process.env.MY_ARG || ''
}

global.fetch = jest.fn() as jest.Mock;

describe("Router Test", () => {

  it("should return that the method (PUT) is not valid", async () => {
    const request = { method: "PUT", url: 'https://test.com?key=1' };
    const res = await handleRequest(request as any, Args);
    expect(res.status).toBe(405);
  });
  
});
