/**
 * Demo state. Entirely in memory and ephemeral - no database, no API route,
 * no network call. That means the demo cannot be defaced by a visitor, costs
 * nothing to run, and still works on bad conference wifi.
 */
export const SEED_GUESTS = [
  { id: 1, name: "Putri Maharani", attending: true, meal: 0 },
  { id: 2, name: "Bagas Wicaksono", attending: true, meal: 1 },
  { id: 3, name: "Siti Rahmawati", attending: true, meal: 2 },
  { id: 4, name: "Andi Kurniawan", attending: false, meal: null },
  { id: 5, name: "Maya Anggraini", attending: true, meal: 0 },
  { id: 6, name: "Rizky Pratama", attending: null, meal: null },
  { id: 7, name: "Clara Wijaya", attending: true, meal: 1 },
  { id: 8, name: "Hendra Gunawan", attending: null, meal: null },
];

export const SEED_PHOTOS = [
  "/assets/work/fullstack.jpg",
  "/assets/work/quanc.png",
];

export const initialState = {
  guests: SEED_GUESTS,
  photos: SEED_PHOTOS,
  nextId: 9,
};

export function reducer(state, action) {
  switch (action.type) {
    case "rsvp": {
      const { name, attending, meal } = action;
      return {
        ...state,
        nextId: state.nextId + 1,
        // Newest first: the visitor's own reply has to be the row they see.
        guests: [
          { id: state.nextId, name, attending, meal, isYou: true },
          ...state.guests.map((g) => ({ ...g, isYou: false })),
        ],
      };
    }
    case "photo":
      return { ...state, photos: [action.src, ...state.photos] };
    case "reset":
      return { ...initialState };
    default:
      return state;
  }
}

export function tally(guests) {
  const attending = guests.filter((g) => g.attending === true).length;
  const declined = guests.filter((g) => g.attending === false).length;
  const pending = guests.filter((g) => g.attending === null).length;
  const meals = [0, 1, 2].map(
    (i) => guests.filter((g) => g.attending === true && g.meal === i).length
  );
  return { attending, declined, pending, meals };
}

/** Generated client-side, which answers the caterer objection directly. */
export function toCSV(guests, mealNames) {
  const header = "Name,Attending,Meal";
  const rows = guests.map((g) => {
    const attending = g.attending === null ? "Pending" : g.attending ? "Yes" : "No";
    const meal = g.meal === null || g.meal === undefined ? "" : mealNames[g.meal];
    // Quote every field: guest names legitimately contain commas.
    return [g.name, attending, meal].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",");
  });
  return [header, ...rows].join("\n");
}
