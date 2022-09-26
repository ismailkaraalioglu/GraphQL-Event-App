import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      title
      desc
      date
      from
      to
      user_id
      location_id
      user {
        id
        username
        email
      }
      location {
        id
        name
        desc
        lat
        lng
      }
      participants {
        id
        user_id
        event_id
        user {
          id
          username
          email
        }
      }
    }
  }
`;
