import React, { FC, Fragment, useEffect, useState } from "react";
import { ICatalog } from "../interface";
import maplibre from "maplibre-gl";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import "maplibre-gl/dist/maplibre-gl.css";
import * as turf from "@turf/turf";
import { Layers, Remove } from "@mui/icons-material";
import LabelVallaris from "./labelVallaris";

const PreviewMap: FC<{ catalog: ICatalog }> = ({ catalog }) => {
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    const mapInit = new maplibre.Map({
      container: "stac-map",
      style: require(`../config/mapStyle`).default,
      attributionControl: false,
    });

    mapInit.on("load", async (e) => {
      setMap(mapInit);
      if (catalog.catalog) {
        const featureCollection =
          catalog.catalog?.type === "Feature"
            ? { type: "FeatureCollection", features: [catalog.catalog] }
            : catalog.catalog;

        let bbox = turf.bbox(featureCollection);
        e.target.fitBounds(bbox as any, {
          padding: 84,
          duration: 2000,
        });

        const assetsList = Object.keys(catalog.catalog.assets);

        if (assetsList.length) {
          setValue(catalog.catalog.assets[assetsList[0]].href);
          const getTile = await fetch(
            `http://tiles.rdnt.io/tiles?url=${
              catalog.catalog.assets[assetsList[0]].href
            }`
          )
            .then((rs) => rs.json())
            .then((rs) => rs)
            .catch((err) => err);

          e.target.addSource("stac-source", {
            type: "raster",
            tileSize: 256,
            tiles: getTile.tiles,
          });

          e.target.addLayer({
            id: "stac-layer",
            type: "raster",
            source: "stac-source",
            paint: {},
          });
        }
      }
    });

    mapInit.once("idle", (e) => {
      e.target.resize();
    });

    return () => {
      mapInit?.remove();
    };
  }, []);

  const handleChange = async (e: any) => {
    setValue(e.target.value);

    const getTile = await fetch(
      `http://tiles.rdnt.io/tiles?url=${e.target.value}`
    )
      .then((rs) => rs.json())
      .then((rs) => rs)
      .catch((err) => err);
    console.log(map);
    if (map?.getSource("stac-source")) {
      map.removeLayer("stac-layer");
      map.removeSource("stac-source");
      console.log(getTile);
      map.addSource("stac-source", {
        type: "raster",
        tileSize: 256,
        tiles: getTile.tiles,
      });

      map.addLayer({
        id: "stac-layer",
        type: "raster",
        source: "stac-source",
        paint: {},
      });
    } else {
      map?.addSource("stac-source", {
        type: "raster",
        tileSize: 256,
        tiles: getTile.tiles,
      });

      map?.addLayer({
        id: "stac-layer",
        type: "raster",
        source: "stac-source",
        paint: {},
      });
    }
  };
  return (
    <Fragment>
      <Box component={"div"} id="stac-map" height={"40vh"} width="100%">
        <LabelVallaris />
        <Box position={"absolute"} top={4} right={4} zIndex={1}>
          {open ? null : (
            <IconButton
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Layers fontSize="small" />
            </IconButton>
          )}

          {open ? (
            <Box
              sx={{
                borderRadius: 1,
                bgcolor: "white",
                padding: 0.5,
                minWidth: 200,
              }}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Typography
                    variant="overline"
                    sx={{ textTransform: "unset" }}
                  >
                    Layers
                  </Typography>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent={"flex-end"}>
                  <IconButton size="small" onClick={() => setOpen(false)}>
                    <Remove fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ maxHeight: 200, overflowY: "auto" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      {Object.keys(catalog.catalog.assets)
                        .filter(
                          (r) =>
                            !r.includes("thumbnail") && !r.includes("preview")
                        )
                        .map((ass) => {
                          return (
                            <Stack key={ass}>
                              <FormControlLabel
                                value={catalog.catalog.assets[ass].href}
                                control={<Radio />}
                                label={ass}
                              />
                            </Stack>
                          );
                        })}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Fragment>
  );
};

export default PreviewMap;
