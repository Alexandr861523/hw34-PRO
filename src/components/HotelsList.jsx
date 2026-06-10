import { useState } from "react";
import { Button } from "@mui/material";

import HotelCard from "./HotelCard";

import styles from "../styles/HotelsPage.module.css";

import hotel1 from "../assets/hotels/1.jpg";
import hotel2 from "../assets/hotels/2.jpg";
import hotel3 from "../assets/hotels/3.jpg";
import hotel4 from "../assets/hotels/4.jpg";
import hotel5 from "../assets/hotels/5.jpg";
import hotel6 from "../assets/hotels/6.jpg";
import hotel7 from "../assets/hotels/7.jpg";
import hotel8 from "../assets/hotels/8.jpg";
import hotel9 from "../assets/hotels/9.jpg";
import hotel10 from "../assets/hotels/10.jpg";

const images = [
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
  hotel8,
  hotel9,
  hotel10,
];

const HotelsList = ({ hotels }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleHotels = hotels.slice(0, visibleCount);

  return (
    <>
      <div className={styles.grid}>
        {visibleHotels.map((hotel, index) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            image={images[index % images.length]}
          />
        ))}
      </div>

      {visibleCount < hotels.length && (
        <div className={styles.buttonWrapper}>
          <Button
            variant="contained"
            onClick={() => setVisibleCount((prev) => prev + 9)}
          >
            Show More
          </Button>
        </div>
      )}
    </>
  );
};

export default HotelsList;