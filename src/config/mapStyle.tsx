import absoluteUrl from "next-absolute-url";
const { origin } = absoluteUrl();

export default {
  version: 8,
  name: "Thailand_Basemap",
  sources: {
    openmaptiles: {
      type: "vector",
      url:
        process.env.NEXT_PUBLIC_STATE === "development"
          ? `${process.env.NEXT_PUBLIC_HOST}/core/tiles/public/osm`
          : `${
              window.location.protocol.includes("http:")
                ? origin.replace("https", "http")
                : origin
            }/core/tiles/public/osm`,
    },
  },
  sprite:
    process.env.NEXT_PUBLIC_STATE === "development"
      ? `${process.env.NEXT_PUBLIC_HOST}/core/tiles/sprite/sprites`
      : `${
          window.location.protocol.includes("http:")
            ? origin.replace("https", "http")
            : origin
        }/core/tiles/sprite/sprites`,
  glyphs:
    process.env.NEXT_PUBLIC_STATE === "development"
      ? `${process.env.NEXT_PUBLIC_HOST}/core/api/tiles/1.0-beta/fonts/{fontstack}/{range}.pbf`
      : `${
          window.location.protocol.includes("http:")
            ? origin.replace("https", "http")
            : origin
        }/core/api/tiles/1.0-beta/fonts/{fontstack}/{range}.pbf`,
  layers: [
    {
      id: "background",
      layout: { visibility: "visible" },
      paint: { "background-color": "rgba(230, 230, 230, 0.63)" },
      type: "background",
    },
    {
      filter: ["all", ["!=", "brunnel", "tunnel"]],
      id: "water",
      layout: { visibility: "visible" },
      paint: {
        "fill-antialias": false,
        "fill-color": "rgba(255, 255, 255, 1)",
      },
      source: "openmaptiles",
      "source-layer": "water",
      type: "fill",
    },
    {
      filter: ["==", "class", "grass"],
      id: "landcover-grass",
      metadata: { "mapbox:group": "1444849388993.3071" },
      paint: { "fill-color": "rgba(228, 229, 228, 0.79)", "fill-opacity": 1 },
      source: "openmaptiles",
      "source-layer": "landcover",
      type: "fill",
    },
    {
      filter: ["==", "class", "wood"],
      id: "landcover_wood",
      paint: {
        "fill-color": "rgba(218, 218, 218, 0.51)",
        "fill-opacity": {
          base: 1,
          stops: [
            [8, 0.6],
            [22, 1],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "landcover",
      type: "fill",
    },
    {
      id: "building",
      layout: { visibility: "visible" },
      metadata: { "mapbox:group": "1444849364238.8171" },
      paint: {
        "fill-antialias": true,
        "fill-color": {
          base: 1,
          stops: [
            [15.5, "rgba(241, 240, 240, 1)"],
            [16, "rgba(212, 212, 212, 1)"],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "building",
      type: "fill",
    },
    {
      id: "building-top",
      layout: { visibility: "visible" },
      metadata: { "mapbox:group": "1444849364238.8171" },
      paint: {
        "fill-color": "rgba(249, 249, 249, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [13, 0],
            [16, 1],
          ],
        },
        "fill-outline-color": "rgba(181, 180, 179, 1)",
        "fill-translate": {
          base: 1,
          stops: [
            [14, [0, 0]],
            [16, [-2, -2]],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "building",
      type: "fill",
    },
    {
      filter: [
        "all",
        ["\u003c=", "admin_level", 2],
        ["==", "$type", "LineString"],
        ["==", "maritime", 0],
      ],
      id: "admin_country",
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      minzoom: 3,
      paint: {
        "line-color": {
          default: "rgba(61, 61, 61, 1)",
          property: "",
          stops: [
            [{ value: 0, zoom: 6 }, "rgba(68, 68, 68, 1)"],
            [{ value: 0, zoom: 10 }, "rgba(68, 68, 68, 1)"],
          ],
          type: "exponential",
        },
        "line-opacity": 0.5,
        "line-width": {
          base: 1.3,
          stops: [
            [3, 0.6],
            [22, 15],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "boundary",
      type: "line",
    },
    {
      filter: ["all", ["==", "$type", "LineString"], ["!=", "class", "pier"]],
      id: "transportation",
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      metadata: {},
      minzoom: 8,
      paint: {
        "line-color": {
          stops: [
            [8, "rgba(207, 205, 202, 1)"],
            [16, "rgba(207, 205, 202, 1)"],
          ],
        },
        "line-gap-width": 0,
        "line-opacity": {
          stops: [
            [10, 0.5],
            [12.5, 1],
          ],
        },
        "line-width": {
          base: 2.5,
          stops: [
            [8, 0.8],
            [13, 1],
            [14, 4],
            [20, 20],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "transportation",
      type: "line",
    },
    {
      filter: ["all", ["==", "$type", "LineString"], ["!=", "class", "pier"]],
      id: "transportation-casing",
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      metadata: {},
      minzoom: 6,
      paint: {
        "line-color": {
          stops: [
            [12, "rgba(255, 255, 255, 1)"],
            [16, "rgba(255, 255, 255, 1)"],
          ],
        },
        "line-gap-width": 0,
        "line-width": {
          base: 3,
          stops: [
            [13, 0.5],
            [14, 2.5],
            [20, 14],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "transportation",
      type: "line",
    },
    {
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor"],
        ["!=", "ramp", 1],
      ],
      id: "road_minor_casing",
      layout: { "line-cap": "round", "line-join": "round", visibility: "none" },
      paint: {
        "line-color": "#cfcdca",
        "line-opacity": {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
        "line-width": {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 20],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "transportation",
      type: "line",
    },
    {
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor"],
      ],
      id: "road",
      layout: { "line-cap": "round", "line-join": "round", visibility: "none" },
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "transportation",
      type: "line",
    },
    {
      filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]],
      id: "road_area_pier",
      layout: { visibility: "visible" },
      metadata: {},
      paint: {
        "fill-antialias": true,
        "fill-color": "rgb(242,243,240)",
        "fill-opacity": 1,
      },
      source: "openmaptiles",
      "source-layer": "transportation",
      type: "fill",
    },
    {
      filter: ["all", ["==", "$type", "LineString"], ["in", "class", "pier"]],
      id: "road_pier",
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      metadata: {},
      paint: {
        "line-color": "rgb(242,243,240)",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [17, 4],
          ],
        },
      },
      source: "openmaptiles",
      "source-layer": "transportation",
      type: "line",
    },
    {
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["!in", "class", "city", "state", "country", "continent"],
      ],
      id: "place_label_other",
      layout: {
        "text-anchor": "center",
        "text-field": "{name:nonlatin}",
        "text-font": ["Kanit"],
        "text-max-width": 6,
        "text-size": {
          stops: [
            [10, 10],
            [12, 14],
          ],
        },
        visibility: "visible",
      },
      minzoom: 12,
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 2,
      },
      source: "openmaptiles",
      "source-layer": "place",
      type: "symbol",
    },
    {
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "minor", "service", "track"],
      ],
      id: "highway-name-minor",
      layout: {
        "symbol-placement": "line",
        "text-field": "{name:nonlatin}",
        "text-font": ["Kanit"],
        "text-rotation-alignment": "map",
        "text-size": {
          base: 1,
          stops: [
            [13, 12],
            [14, 13],
          ],
        },
        visibility: "visible",
      },
      minzoom: 15,
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-blur": 0.5,
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1,
      },
      source: "openmaptiles",
      "source-layer": "transportation_name",
      type: "symbol",
    },
    {
      filter: ["in", "class", "primary", "secondary", "tertiary", "trunk"],
      id: "highway-name-major",
      layout: {
        "symbol-placement": "line",
        "text-field": "{name:latin} {name:nonlatin}",
        "text-font": ["Kanit"],
        "text-rotation-alignment": "map",
        "text-size": {
          base: 1,
          stops: [
            [13, 12],
            [14, 13],
          ],
        },
      },
      minzoom: 12.2,
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-blur": 0.5,
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1,
      },
      source: "openmaptiles",
      "source-layer": "transportation_name",
      type: "symbol",
    },
    {
      filter: ["all", ["==", "$type", "Point"], ["==", "class", "city"]],
      id: "place_label_city",
      layout: {
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Kanit"],
        "text-line-height": 1.1,
        "text-max-width": 10,
        "text-size": {
          stops: [
            [3, 8],
            [8, 12],
          ],
        },
      },
      maxzoom: 16,
      paint: {
        "icon-color": "rgba(12, 12, 12, 1)",
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 2,
      },
      source: "openmaptiles",
      "source-layer": "place",
      type: "symbol",
    },
    {
      filter: ["==", "class", "continent"],
      id: "place-continent",
      layout: {
        "text-field": "{name:latin}",
        "text-font": ["Kanit"],
        "text-line-height": 1.5,
        "text-max-width": 4,
        "text-size": 13,
        visibility: "visible",
      },
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 2,
      },
      source: "openmaptiles",
      "source-layer": "place",
      type: "symbol",
    },
    {
      filter: ["==", "class", "country"],
      id: "place-country",
      layout: {
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Kanit"],
        "text-size": 11,
        visibility: "visible",
      },
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1.5,
      },
      source: "openmaptiles",
      "source-layer": "place",
      type: "symbol",
    },
    {
      filter: ["all", ["==", "$type", "LineString"], ["has", "name"]],
      id: "waterway-name",
      layout: {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{name:latin} {name:nonlatin}",
        "text-font": ["Kanit"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "text-size": 14,
      },
      minzoom: 13,
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1.5,
      },
      source: "openmaptiles",
      "source-layer": "waterway",
      type: "symbol",
    },
    {
      filter: ["==", "$type", "LineString"],
      id: "water-name-lakeline",
      layout: {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Kanit"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "text-size": 14,
      },
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1.5,
      },
      source: "openmaptiles",
      "source-layer": "water_name",
      type: "symbol",
    },
    {
      filter: ["all", ["==", "$type", "Point"], ["==", "class", "ocean"]],
      id: "water-name-ocean",
      layout: {
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-field": "{name:latin}",
        "text-font": ["Kanit"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "text-size": 14,
        "text-transform": "uppercase",
        visibility: "visible",
      },
      minzoom: 0,
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1.5,
      },
      source: "openmaptiles",
      "source-layer": "water_name",
      type: "symbol",
    },
    {
      filter: ["all", ["==", "$type", "Point"], ["!in", "class", "ocean"]],
      id: "water-name-other",
      layout: {
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Kanit"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "text-size": {
          stops: [
            [0, 10],
            [6, 14],
          ],
        },
        visibility: "visible",
      },
      paint: {
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1.5,
      },
      source: "openmaptiles",
      "source-layer": "water_name",
      type: "symbol",
    },
    {
      filter: ["all", ["==", "$type", "Point"], ["\u003e=", "rank", 20]],
      id: "poi_z16",
      layout: {
        "icon-image": "{class}_11",
        "text-anchor": "top",
        "text-field": "{name}",
        "text-font": ["Kanit"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-size": 12,
        visibility: "visible",
      },
      minzoom: 16,
      paint: {
        "icon-opacity": 0.7,
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      source: "openmaptiles",
      "source-layer": "poi",
      type: "symbol",
    },
    {
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["\u003e=", "rank", 7],
        ["\u003c", "rank", 20],
      ],
      id: "poi_z15",
      layout: {
        "icon-image": "{class}_11",
        "text-anchor": "top",
        "text-field": "{name}",
        "text-font": ["Kanit"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-size": 12,
        visibility: "visible",
      },
      minzoom: 15,
      paint: {
        "icon-opacity": 0.7,
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      source: "openmaptiles",
      "source-layer": "poi",
      type: "symbol",
    },
    {
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["\u003e=", "rank", 1],
        ["\u003c", "rank", 7],
      ],
      id: "poi_z14",
      layout: {
        "icon-image": "{class}_11",
        "text-anchor": "top",
        "text-field": "{name}",
        "text-font": ["Kanit", "Kanit"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-size": 12,
        visibility: "visible",
      },
      minzoom: 14,
      paint: {
        "icon-opacity": 0.7,
        "text-color": "rgba(84, 84, 84, 1)",
        "text-halo-blur": 0.5,
        "text-halo-color": "rgba(231, 231, 231, 0.75)",
        "text-halo-width": 1,
      },
      source: "openmaptiles",
      "source-layer": "poi",
      type: "symbol",
    },
  ],
};
