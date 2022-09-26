import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "./queries";
import Loading from "../../components/Loading";
import EventDetailCard from "../../components/EventDetailCard";

function EventDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <EventDetailCard
        event={data.event}
        user={data.event.user}
        location={data.event.location}
        participants={data.event.participants}
      />
    </div>
  );
}

export default EventDetail;
