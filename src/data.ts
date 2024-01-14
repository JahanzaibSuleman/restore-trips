import { Ticket } from "./types";

export const tickets: Ticket[] = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Paris", destination: "London" },
  { source: "London", destination: "Amsterdam" },
];

export const ticketsCircular: Ticket[] = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Berlin", destination: "Amsterdam" },
];

export const ticketsPartial: Ticket[] = [
  { source: "Amsterdam" },
  { source: "Berlin", destination: "Amsterdam" },
];

export const ticketsEmpty: Ticket[] = [];
