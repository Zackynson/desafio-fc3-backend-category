import InvalidUuidError from "../../../errors/invalid-uuid.error";
import UniqueEntityId from "../unique-entity-id.vo";
import { validate as uuidValidate } from "uuid";

describe("UniqueEntityId Unit Tests", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const uuid = "0602120d-3f1d-4e3e-8227-2bbe59d95983";
    const vo = new UniqueEntityId(uuid);
    expect(vo.value).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
