import { route1Getfunction2 } from "../../handlers/route1";
import { Request, Response } from "express";

const mockResponse = { send: jest.fn(), status: jest.fn() } as unknown as Response;
const mockRequest = {} as Request;

describe("route1Getfunction2", () => {
  it("return empty array", async () => {
    const value = await route1Getfunction2(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
