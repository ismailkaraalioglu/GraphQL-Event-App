export const Participant = {
  user: (parent, __, { db }) =>
    db.users.find((user) => user.id == parent.user_id),
};
