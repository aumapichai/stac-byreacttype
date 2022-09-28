import { Box, Typography } from "@mui/material";
import React, { FC, Fragment } from "react";

const LabelVallaris: FC = () => {
  return (
    <Fragment>
      <div style={{ position: "absolute", zIndex: 1, bottom: 0, right: 8 }}>
        <Box
          component={"div"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Typography
            component={"a"}
            // color="secondary"
            variant="overline"
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            style={{
              fontSize: 8,
              textTransform: "unset",
              textDecoration: "unset",
            }}
          >
            © <span style={{ fontWeight: "bold" }}>OpenStreetMap</span>{" "}
            contributors
          </Typography>
        </Box>
      </div>
    </Fragment>
  );
};

export default LabelVallaris;
