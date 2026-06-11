import {
  Typography,
  Paper,
  Box,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Paper
      sx={{
        p: 4,
        maxWidth: 900,
        margin: "0 auto",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        About Hotel Search
      </Typography>

      <Typography
        sx={{
          mt: "90px",
          textAlign: "center",
        }}
      >
        Hotel Search is a SPA application
        built with React, Redux Toolkit,
        Formik, React Router and MUI.
      </Typography>

      <Typography
        sx={{
          mt: "120px",
          textAlign: "center",
          fontSize: "1.1rem",
        }}
      >
        Search hotels worldwide in a few
        clicks.
      </Typography>

      <Box
        sx={{
          marginTop: "auto",
          paddingTop: "50px",
          textAlign: "center",
          color: "#9e9e9e",
        }}
      >
        <Typography
          variant="body2"
          color="inherit"
        >
          © 2026 Hotel Search
        </Typography>

        <Typography
          variant="body2"
          color="inherit"
        >
          All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          color="inherit"
        >
          Built with React, Redux Toolkit &
          MUI
        </Typography>
      </Box>
    </Paper>
  );
};

export default AboutPage;