import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function EventDetailCard({ event, user, location, participants }) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginX: "auto", marginTop: 5 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          {event.title}
          <Box component="span" sx={{ fontSize: 15 }}>
            {event.date} {" - "}
            <Box component="span" sx={{ fontSize: 15 }}>
              ({event.from}
            </Box>
            {"-"}
            <Box component="span" sx={{ fontSize: 15 }}>
              {event.to})
            </Box>
          </Box>
        </Typography>
        <Typography variant="body2">{event.desc}</Typography>
        <Typography sx={{ marginTop: 2 }}>
          Event Owner: {user.username}
        </Typography>
        <Typography sx={{ marginTop: 2 }}>- Event Location -</Typography>
        <Typography>Location Lat: {location.lat}</Typography>
        <Typography>Location Lng: {location.lng}</Typography>
        {participants.length === 0 ? (
          <Typography sx={{ marginTop: 2 }}>No Participant</Typography>
        ) : (
          <Typography sx={{ marginTop: 2 }}>- Participants -</Typography>
        )}
        {participants &&
          participants.map((participant, idx) => (
            <Typography key={idx}>* {participant.user.username}</Typography>
          ))}
      </CardContent>
      <CardActions sx={{ margin: 1 }}>
        <Link to="/">Back</Link>
      </CardActions>
    </Card>
  );
}

export default EventDetailCard;
