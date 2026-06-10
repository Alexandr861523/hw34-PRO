import db from "../data/db.json";


export const fetchDestinations = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db.destination);
    }, 500);
  });
};


export const searchHotels = (city) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hotels = db.hotels.filter(
        (hotel) =>
          hotel.city.toLowerCase() === city.toLowerCase()
      );

      resolve(hotels);
    }, 500);
  });
};