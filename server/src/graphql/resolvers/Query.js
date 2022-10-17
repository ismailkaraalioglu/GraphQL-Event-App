export const Query = {
  // USER
  users: (_, __, { db }) => db.users,
  user: (_, { id }, { db }) => db.users.find((user) => user.id == id),

  // EVENT
  events: (_, __, { db }) => db.events,
  event: (_, { id }, { db }) => db.events.find((event) => event.id == id),

  // LOCATİON
  locations: (_, __, { db }) => db.locations,
  location: (_, { id }, { db }) =>
    db.locations.find((location) => location.id == id),

  // PARTİCİPANT
  participants: (_, __, { db }) => db.participants,
  participant: (_, { id }, { db }) =>
    db.participants.find((participant) => participant.id == id),
};
