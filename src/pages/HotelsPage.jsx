import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import HotelsList from "../components/HotelsList";

const HotelsPage = () => {
  const hotels = useSelector(
    (state) => state.hotels.items
  );

  if (!hotels || hotels.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
          <Typography
             variant="h4"
             gutterBottom
                >
              Sorry 😔
               </Typography>

                  <Typography
                     variant="h6"
                     color="text.secondary"
                    >
                  Hotels not found in that city
                   </Typography> 
      </Box>
    );
  }

  return <HotelsList hotels={hotels} />;
};

export default HotelsPage;