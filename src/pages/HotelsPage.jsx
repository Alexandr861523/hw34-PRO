import { useSelector } from "react-redux";

import HotelCard from "../components/HotelCard";
import Loader from "../components/Loader";

const HotelsPage = () => {
  const hotels = useSelector(
    state => state.hotels.items
  );

  const loading = useSelector(
    state => state.hotels.loading
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1>Hotels</h1>

      {hotels.length === 0 ? (
        <p>No hotels found</p>
      ) : (
        hotels.map(hotel => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />
        ))
      )}
    </>
  );
};

export default HotelsPage;