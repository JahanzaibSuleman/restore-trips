import { tickets, ticketsCircular, ticketsEmpty, ticketsPartial } from "./data";
import restoreItinerary from "./restoringTrips/restoreItinerary";

console.log("Proper tickets:");
console.table(tickets);
const restoredItinerary = restoreItinerary(tickets);
console.log("Restored Itinerary: ", restoredItinerary);

console.log("\nCircular tickets:");
console.table(ticketsCircular);
const restoredItineraryCircular = restoreItinerary(ticketsCircular);
console.log("Restored Itinerary: ", restoredItineraryCircular);

console.log("\nPartial tickets:");
console.table(ticketsPartial);
const restoredItineraryPartial = restoreItinerary(ticketsPartial);
console.log("Restored Itinerary: ", restoredItineraryPartial);

console.log("\nEmpty tickets:");
console.table(ticketsEmpty);
const restoredItineraryEmpty = restoreItinerary(ticketsEmpty);
console.log("Restored Itinerary: ", restoredItineraryEmpty);
