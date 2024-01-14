import { Ticket } from "../types";
import getStartCity from "./getStartCity";

/**
 * Constructs and retrieves the travel route based on the provided tickets.
 *
 * @param  {Ticket []} tickets - List of tickets with source and destination cities.
 *
 * @return {string | null} - A comma-separated list of cities representing the travel route according to the tickets.
 */

const restoreItinerary = (tickets: Ticket[]): string | undefined => {
  try {
    // Check if there are no tickets.
    if (!tickets.length) {
      throw new Error("Error: No tickets provided.");
    }

    const ticketMap = new Map<string, string>();

    for (const { source, destination } of tickets) {
      if (source && destination) {
        ticketMap.set(source, destination);
      } else {
        throw new Error("Error: Incomplete ticket provided.");
      }
    }

    const startCity: string | null = getStartCity(ticketMap);

    // Check if there is no start city.
    if (!startCity) {
      throw new Error(
        "Error: Unable to determine the start city. Possible circular itinerary."
      );
    }

    const travelRoute: string[] = [startCity];

    let currentCity: string | null | undefined = startCity;

    while (currentCity) {
      currentCity = ticketMap.get(currentCity);
      if (currentCity) {
        travelRoute.push(currentCity);
      }
    }

    return travelRoute.join(", ");
  } catch (error: any) {
    console.error(error.message);
    return undefined;
  }
};

export default restoreItinerary;
