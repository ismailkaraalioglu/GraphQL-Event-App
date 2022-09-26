export const Query = {
  // USER
  users: (_, __, { db }) => db.users,
  user: (_, { id }, { db }) =>
    db.users.find((user) => user.id === parseInt(id)),

  // EVENT
  events: (_, __, { db }) => db.events,
  event: (_, { id }, { db }) =>
    db.events.find((event) => event.id === parseInt(id)),

  // LOCATİON
  locations: (_, __, { db }) => db.locations,
  location: (_, { id }, { db }) =>
    db.locations.find((location) => location.id === parseInt(id)),

  // PARTİCİPANT
  participants: (_, __, { db }) => db.participants,
  participant: (_, { id }, { db }) =>
    db.participants.find((participant) => participant.id === parseInt(id)),
};
