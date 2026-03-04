let animals = ["dog", "cat", "rabbit", "hamster"];

// beforeAll(() => {
//   animals = ["dog", "cat", "rabbit", "hamster"];
// });

// afterAll(() => {
//   animals = ["dog", "cat", "rabbit", "hamster"];
// });

beforeEach(() => {
  animals = ["dog", "cat", "rabbit", "hamster"];
});

// afterEach(() => {
//   animals = ["dog", "cat", "rabbit", "hamster"];
// });

describe("animals array", () => {
  it("should add an animal to the end of the array", () => {
    animals.push("parrot");
    expect(animals[animals.length - 1]).toBe("parrot");
  });

  it("should add an animal to the beginning of the array", () => {
    animals.unshift("parrot");
    expect(animals[0]).toBe("parrot");
  });

  it("should be 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it("should be true", () => {
    expect(true).toBeTruthy();
  });
});
