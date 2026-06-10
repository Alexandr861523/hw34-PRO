import { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";

import { getHotels } from "../redux/hotelsOperations";
import { getDestinations } from "../redux/destinationsOperations";

import Loader from "./Loader";

import styles from "../styles/SearchForm.module.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const destinations = useSelector(
    (state) => state.destinations.items
  );

  const loading = useSelector(
    (state) => state.destinations.loading
  );

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  const handleSubmit = async (values) => {
    await dispatch(
      getHotels(values.destination)
    );

    navigate("/hotels");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Paper className={styles.paper}>
      <Typography
        variant="h5"
        gutterBottom
      >
        Find Your Hotel
      </Typography>

      <Formik
        initialValues={{
          destination: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.destination) {
          errors.destination =
          "Destination is required";
           }

          if (!values.checkIn) {
          errors.checkIn =
          "Check-in date is required";
           }

          if (!values.checkOut) {
          errors.checkOut =
          "Check-out date is required";
          }

          if (values.guests < 1 || values.guests > 8) {
          errors.guests =
          "Guests must be between 1 and 8";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
        }) => (
          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <TextField
              select
              size="small"
              label="Destination"
              name="destination"
              value={values.destination}
              onChange={handleChange}
              error={!!errors.destination}
              helperText={errors.destination}
              fullWidth
            >
              {destinations?.map((city) => (
                <MenuItem
                  key={city.id}
                  value={city.label}
                >
                  {city.label}
                </MenuItem>
              ))}
            </TextField>

            <Typography variant="body2">
              Check-in date
            </Typography>

            <TextField
              type="date"
              size="small"
              name="checkIn"
              value={values.checkIn}
              onChange={handleChange}
              error={!!errors.checkIn}
              helperText={errors.checkIn}
              fullWidth
            />

            <Typography variant="body2">
              Check-out date
            </Typography>

            <TextField
              type="date"
              name="checkOut"
              size="small"
              value={values.checkOut}
              onChange={handleChange}
              error={!!errors.checkOut}
              helperText={errors.checkOut}
              fullWidth
            />

            <TextField
              type="number"
              size="small"
              label="Guests"
              name="guests"
              value={values.guests}
              onChange={handleChange}
              error={!!errors.guests}
              helperText={errors.guests}
              inputProps={{
                min: 1,
                max: 8,
              }}
              fullWidth
            />
 
            <Button
              variant="contained"
              type="submit"
              size="medium"
            >
              Search
            </Button>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default SearchForm;