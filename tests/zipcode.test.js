import { describe, it, expect } from "vitest";
import { ZipcodeService } from "../src/service/zipcode";
import { createSandbox } from "sinon";
import {
  DEFAULT_LIST,
  DEFAULT_ZIPCODE,
  DEFAULT_ZIPCODE_INFO,
} from "./constants";

const sandbox = createSandbox();

describe("Zipcode Suite Test", () => {
  it("should be true if the zipcode is appended to the list", async () => {
    const service = new ZipcodeService();

    const stub = sandbox.stub(service, service.request.name);
    stub.withArgs(DEFAULT_ZIPCODE).resolves(DEFAULT_ZIPCODE_INFO);

    await service.add(DEFAULT_ZIPCODE);

    const expected = DEFAULT_LIST;
    const result = service.get();

    expect(expected).toEqual(result);
  });
  it("should be true if the zipcode is not appended to the list", async () => {
    const service = new ZipcodeService();

    const stub = sandbox.stub(service, service.request.name);
    stub.withArgs(DEFAULT_ZIPCODE).resolves({ erro: true });

    const expected = async () => await service.add(DEFAULT_ZIPCODE);

    await expect(expected).rejects.toThrow("Erro ao buscar o CEP");
  });
  it("should be true if the constructor append default list", async () => {
    const service = new ZipcodeService({ ...DEFAULT_LIST });

    const expected = DEFAULT_LIST;
    const result = service.get();

    expect(expected).toEqual(result);
  });
  it("should be true if the zipcode is removed from the list", async () => {
    const service = new ZipcodeService({ ...DEFAULT_LIST });

    service.remove(DEFAULT_ZIPCODE);

    const expected = {};
    const result = service.get();

    expect(expected).toEqual(result);
  });
});
