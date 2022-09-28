import { Box } from "@mui/material";
import React, { FC, useEffect } from "react";
import { ICatalog } from "../interface";

const Thumbnail: FC<{ state: ICatalog }> = ({ state }) => {
  const { catalog } = state;

  return (
    <Box
      component={"div"}
      sx={{ height: "50vh", width: "100%", bgcolor: "black" }}
    >
      <Box
        component="img"
        src={`${
          catalog.links.find((l: any) => l.rel === "preview")
            ? catalog.links.find((l: any) => l.rel === "preview").href
            : ""
        }`}
        sx={{
          width: "100%",
          objectFit: "contain",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default Thumbnail;
