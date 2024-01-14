/**
 * Finds and returns the starting city from the given ticket map, where a path can be traversed.
 *
 * @param  {Map<string, string>} ticketMap - Map of all the tickets with source and destination as key-value pairs.
 *
 * @return {string | null} - The starting city or null if all the tickets form a circular itinerary.
 */

const getStartCity = (ticketMap: Map<string, string>): string | null => {
  const destinationCities = new Set(ticketMap.values());

  for (const potentialStartCity of ticketMap.keys()) {
    if (!destinationCities.has(potentialStartCity)) {
      return potentialStartCity;
    }
  }

  return null;
};

export default getStartCity;
