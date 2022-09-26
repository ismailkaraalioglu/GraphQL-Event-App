import EventCard from "../../components/EventCard";
import Loading from "../../components/Loading";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "./queries";

function Home() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div style={{ marginTop: "50px" }}>
      {data &&
        data.events.map((event, idx) => <EventCard key={idx} event={event} />)}
    </div>
  );
}

export default Home;
