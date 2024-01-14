import restoreItinerary from "../restoringTrips/restoreItinerary";
import { Ticket } from "../types";

describe("restoreItinerary", () => {
  test("should restore itinerary for regular tickets", () => {
    const tickets: Ticket[] = [
      { source: "Amsterdam", destination: "Berlin" },
      { source: "Paris", destination: "London" },
      { source: "London", destination: "Amsterdam" },
    ];

    const result = restoreItinerary(tickets);

    expect(result).toBe("Paris, London, Amsterdam, Berlin");
  });

  test("should handle circular itinerary", () => {
    const tickets: Ticket[] = [
      { source: "Amsterdam", destination: "Berlin" },
      { source: "Berlin", destination: "Amsterdam" },
    ];

    const result = restoreItinerary(tickets);

    expect(result).toBeUndefined();
  });

  test("should handle partial tickets", () => {
    const tickets: Ticket[] = [
      { source: "Amsterdam" },
      { source: "Berlin", destination: "Amsterdam" },
    ];

    const result = restoreItinerary(tickets);

    expect(result).toBeUndefined();
  });

  test("should handle empty tickets", () => {
    const tickets: Ticket[] = [];

    const result = restoreItinerary(tickets);

    expect(result).toBeUndefined();
  });
});
