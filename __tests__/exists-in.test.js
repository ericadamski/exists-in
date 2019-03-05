const existsIn = require("../index");

describe("Exists In", () => {
  const testObject = {
    a: {
      b: {
        c: "abc",
      },
      c: ["1234"],
    },
  };

  test("should return the value at the key given", () => {
    expect(existsIn("a", testObject)).toEqual(testObject.a);
  });

  test("should return false if key is not found in object", () => {
    expect(existsIn("d", testObject)).toBeFalsy();
  });

  test("should allow nested object tests", () => {
    expect(existsIn("a.b.c", testObject)).toEqual(testObject.a.b.c);
  });

  test("should fail on the first undefined key", () => {
    expect(existsIn("a.b.c.d", testObject)).toBeFalsy();
  });

  test("should return the fallback value on fail", () => {
    expect(existsIn("a.b.c.d", testObject, "blue")).toEqual("blue");
  });
});
