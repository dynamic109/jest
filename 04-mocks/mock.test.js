const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  return results.data;
};

describe("Mocks", () => {
  it("should mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
      data: {
        id: 1,
        todo: "Mocked todo",
      },
    });
    const results = await fetchData(1);

    expect(results.todo).toBe("Mocked todo");
  });
});
