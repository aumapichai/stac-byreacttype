import { Box } from "@mui/material";
import React, { FC, Fragment, useEffect } from "react";
import { ICatalog } from "../interface";
import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import * as turf from "@turf/turf";
import LabelVallaris from "./labelVallaris";

const MapRightContent: FC<{ state: ICatalog }> = ({ state }) => {
  const { catalog } = state;
  useEffect(() => {
    const mapInit = new maplibre.Map({
      container: "right-map",
      style: require(`../config/mapStyle`).default,
      attributionControl: false,
      interactive: false,
    });

    mapInit.on("load", (e) => {
      if (catalog.extent) {
        const poly = turf.bboxPolygon(catalog.extent.spatial.bbox[0]);

        const featureCollection = {
          type: "FeatureCollection",
          features: [poly],
        };

        e.target.addSource("bbox", {
          type: "geojson",
          data: featureCollection,
        });

        e.target.addLayer({
          id: "bbox-layer",
          type: "fill",
          source: "bbox",
          layout: {},
          paint: {
            "fill-color": "#B2C756",
            "fill-opacity": 0.36,
          },
        });
        let bbox = turf.bbox(featureCollection);
        e.target.fitBounds(bbox as any, {
          padding: 84,
          duration: 0,
        });
      } else {
        const featureCollection = {
          type: "FeatureCollection",
          features: [catalog],
        };

        e.target.addSource("bbox", {
          type: "geojson",
          data: featureCollection,
        });

        e.target.addLayer({
          id: "bbox-layer",
          type: "fill",
          source: "bbox",
          layout: {},
          paint: {
            "fill-color": "#B2C756",
            "fill-opacity": 0.36,
          },
        });
        let bbox = turf.bbox(featureCollection);
        e.target.fitBounds(bbox as any, {
          padding: 84,
          duration: 0,
        });
      }
    });

    mapInit.once("idle", (e) => {
      e.target.resize();
    });

    return () => {
      mapInit?.remove();
    };
  }, [catalog]);
  return (
    <Fragment>
      <Box component={"div"} id="right-map" height={250} width="100%">
        <LabelVallaris />
      </Box>
    </Fragment>
  );
};

export default MapRightContent;
