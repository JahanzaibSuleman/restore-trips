import getStartCity from "../restoringTrips/getStartCity";

describe("getStartCity", () => {
  test("should find start city for regular tickets", () => {
    const ticketMap = new Map([
      ["Amsterdam", "Berlin"],
      ["Paris", "London"],
      ["London", "Amsterdam"],
    ]);

    const result = getStartCity(ticketMap);

    expect(result).toBe("Paris");
  });

  test("should handle circular itinerary", () => {
    const ticketMap = new Map([
      ["Amsterdam", "Berlin"],
      ["Berlin", "Amsterdam"],
    ]);

    const result = getStartCity(ticketMap);

    expect(result).toBeNull();
  });

  test("should handle empty tickets", () => {
    const ticketMap = new Map<string, string>();

    const result = getStartCity(ticketMap);

    expect(result).toBeNull();
  });
});
