import {
  Typography,
  Paper,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4">
        About Hotel Search
      </Typography>

      <Typography mt={2}>
        Hotel Search is a SPA application
        built with React, Redux Toolkit,
        Formik, React Router and MUI.
      </Typography>

      <Typography mt={2}>
        Search hotels worldwide in a few
        clicks.
      </Typography>
    </Paper>
  );
};

export default AboutPage;