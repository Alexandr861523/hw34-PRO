// import {
//   Card,
//   CardContent,
//   Typography,
//   Link,
// } from "@mui/material";

// const HotelCard = ({ hotel }) => {
//   return (
//     <Card sx={{ mb: 2 }}>
//       <CardContent>
//         <Typography variant="h5">
//     {hotel.name}
//   </Typography>

//   <Typography>
//     Address: {hotel.address}
//   </Typography>

//   <Typography>
//     City: {hotel.city}
//   </Typography>

//   <Typography>
//     Rating: {hotel.hotel_rating}
//   </Typography>

//   <Typography>
//     Phone: {hotel.phone_number || "No phone"}
//   </Typography>

//   {hotel.website && (
//     <Link
//       href={hotel.website}
//       target="_blank"
//     >
//       Website
//     </Link>
//   )}
//       </CardContent>
//     </Card>
//   );
// };

// export default HotelCard;

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";

import styles from "../styles/HotelCard.module.css";

const HotelCard = ({ hotel, image }) => {
  return (
    <Card className={styles.card}>
      <Typography
        variant="h6"
        className={styles.title}
      >
        {hotel.name}
      </Typography>

      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={hotel.name}
      />

      <CardContent>
        <Typography>
          Address: {hotel.address}
        </Typography>

        <Typography>
          City: {hotel.city}
        </Typography>

        <Typography>
          Rating: {hotel.hotel_rating ?? "N/A"}
        </Typography>

        <Typography>
          Phone: {hotel.phone_number || "No phone"}
        </Typography>

        {hotel.website && (
          <Link
            href={hotel.website}
            target="_blank"
          >
            Website
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default HotelCard;