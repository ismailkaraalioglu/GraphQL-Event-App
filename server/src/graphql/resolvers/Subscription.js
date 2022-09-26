export const Subscription = {
  userCreated: {
    subscribe: (_, __, { pubsub }) => pubsub.subscribe("userCreated"),
    resolve: (payload) => payload,
  },
  eventCreated: {
    subscribe: (_, __, { pubsub }) => pubsub.subscribe("eventCreated"),
    resolve: (payload) => payload,
  },
  participantAdded: {
    subscribe: (_, __, { pubsub }) => pubsub.subscribe("participantAdded"),
    resolve: (payload) => payload,
  },
};
