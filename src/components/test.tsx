export const no0 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Planet Disaster Data (planet-disaster-data)",
  description:
    '<p><a href="https://www.planet.com/disasterdata/">Planet Disaster Data</a> makes imagery available directly to the public, volunteers, humanitarian organizations, and other coordinating bodies in support of the International Charter for Space and Major Disasters. Data is released for individual disaster events, providing a 30 day window pre- and post-disaster. Imagery is provided under Creative Commons licenses, free of charge, with either CC-BY-SA or CC-BY-NC.</p>\n',
  identifier: "planet-disaster-data",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/collection.json",
  url: "/",
  workExample: [],
  hasPart: [
    {
      "@type": "DataCatalog",
      name: "Hurricane Harvey",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
      url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
    },
  ],
  dataset: [],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Planet Disaster Data",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/collection.json",
    url: "/",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const no1 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey (hurricane-harvey)",
  description:
    "<p>Planet Disaster Data makes imagery available directly to the public, volunteers, humanitarian organizations, and other coordinating bodies in support of the International Charter for Space and Major Disasters. This catalog of data is released for Hurricane Harvey, providing a 30 day window pre- and post-disaster. Imagery is provided under Creative Commons licenses, free of charge, with either CC-BY-SA or CC-BY-NC. All new Planet scenes are made available each day, immediately after production.</p>\n",
  identifier: "hurricane-harvey",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  workExample: [],
  hasPart: [
    {
      "@type": "DataCatalog",
      name: "8/31",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
      url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
    },
  ],
  dataset: [],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const no2 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey 08-31-2017 (hurricane-harvey-0831)",
  description:
    "<p>Planet Scenes and Composites for Hurricane Harvey on Aug 31, 2017</p>\n",
  identifier: "hurricane-harvey-0831",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
  workExample: [],
  hasPart: [],
  dataset: [
    {
      identifier: "20170831_172754_101c",
      name: "20170831_172754_101c",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/Zspq9Zi6og54HEobM5yhLKaVsVM9oumD884bE6ie6bk3bZGkbQG3pnFPcHrxD1DZqJfeyEzu3sVbeUgfRicTH5ZU3CD4TtYUwwnhmVtHswTYNQ1btgRj",
    },
    {
      identifier: "2017831_195552_SS02",
      name: "20170831_195552_SS02",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/2gswuNaHqkejHgywXNvPgsnDjG9zZV5RTKdHMrLMT8KMRRwguD4BDYq5CtR18hjZmU8RTVH9Q373jJDYGFyDQzwFff8HuqjmCi1x64GVnMuXSdTzus",
    },
    {
      identifier: "20170831_195425_SS02",
      name: "20170831_195425_SS02",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/Zspq9Zi6og54HEobM5yhLKaVsVM9oumD884bE6ie6bk3bZGkbQG3pnFPcHrxD1DZqJffrdMf8r31NMG3egpgnD9amUVcGMSRW8DuMLQ6XYkreCoqC1SD",
    },
    {
      identifier: "20170831_162740_ssc1d1",
      name: "20170831_162740_ssc1d1",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/4i8b87XdQiswUuRec6xaGFFxh9TzMNbvmecWsgCubvdwUz7RTCMwCFqDWzdcRePrZ7NPeZkZnMTVaUdTpSfBRpv5eCqxjrjtkyxvKmfM7icHmsxoxYQimxovYM",
    },
    {
      identifier: "Houston-East-20170831-103f-100d-0f4f-RGB",
      name: "Houston-East-20170831-103f-100d-0f4f-RGB",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/8DBoUE28VG7TU7cmFfNYkmWk6YPh9beLkAvP1djQz2RjKmx9CgBSQnfsDkyd3xtt57MNyRcSLckMsHrJLMCyrdkfRYKY39HGikkUcvjLqxrgzAynPCpBB5cpijS9rw8pwPYk8r3wkHZVp2BC9fLG8H7QDUriBU33RdfTdwQm3mX",
    },
  ],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey 08-31-2017",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const item1 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey (hurricane-harvey)",
  description:
    "<p>Planet Disaster Data makes imagery available directly to the public, volunteers, humanitarian organizations, and other coordinating bodies in support of the International Charter for Space and Major Disasters. This catalog of data is released for Hurricane Harvey, providing a 30 day window pre- and post-disaster. Imagery is provided under Creative Commons licenses, free of charge, with either CC-BY-SA or CC-BY-NC. All new Planet scenes are made available each day, immediately after production.</p>\n",
  identifier: "hurricane-harvey",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  workExample: [],
  hasPart: [
    {
      "@type": "DataCatalog",
      name: "8/31",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
      url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
    },
  ],
  dataset: [],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const item2 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey 08-31-2017 (hurricane-harvey-0831)",
  description:
    "<p>Planet Scenes and Composites for Hurricane Harvey on Aug 31, 2017</p>\n",
  identifier: "hurricane-harvey-0831",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
  workExample: [],
  hasPart: [],
  dataset: [
    {
      name: "20170831_172754_101c",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/20170831_172754_101c/20170831_172754_101c.json",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/Zspq9Zi6og54HEobM5yhLKaVsVM9oumD884bE6ie6bk3bZGkbQG3pnFPcHrxD1DZqJfeyEzu3sVbeUgfRicTH5ZU3CD4TtYUwwnhmVtHswTYNQ1btgRj",
    },
    {
      name: "20170831_195552_SS02",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/2017831_195552_SS02/2017831_195552_SS02.json",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/2gswuNaHqkejHgywXNvPgsnDjG9zZV5RTKdHMrLMT8KMRRwguD4BDYq5CtR18hjZmU8RTVH9Q373jJDYGFyDQzwFff8HuqjmCi1x64GVnMuXSdTzus",
    },
    {
      name: "20170831_195425_SS02",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/20170831_195425_SS02/20170831_195425_SS02.json",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/Zspq9Zi6og54HEobM5yhLKaVsVM9oumD884bE6ie6bk3bZGkbQG3pnFPcHrxD1DZqJffrdMf8r31NMG3egpgnD9amUVcGMSRW8DuMLQ6XYkreCoqC1SD",
    },
    {
      name: "20170831_162740_ssc1d1",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/20170831_162740_ssc1d1/20170831_162740_ssc1d1.json",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/4i8b87XdQiswUuRec6xaGFFxh9TzMNbvmecWsgCubvdwUz7RTCMwCFqDWzdcRePrZ7NPeZkZnMTVaUdTpSfBRpv5eCqxjrjtkyxvKmfM7icHmsxoxYQimxovYM",
    },
    {
      name: "Houston-East-20170831-103f-100d-0f4f-RGB",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/Houston-East-20170831-103f-100d-0f4f-RGB/Houston-East-20170831-103f-100d-0f4f-RGB.json",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/8DBoUE28VG7TU7cmFfNYkmWk6YPh9beLkAvP1djQz2RjKmx9CgBSQnfsDkyd3xtt57MNyRcSLckMsHrJLMCyrdkfRYKY39HGikkUcvjLqxrgzAynPCpBB5cpijS9rw8pwPYk8r3wkHZVp2BC9fLG8H7QDUriBU33RdfTdwQm3mX",
    },
  ],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey 08-31-2017",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const item3 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey 08-31-2017 (hurricane-harvey-0831)",
  description:
    "<p>Planet Scenes and Composites for Hurricane Harvey on Aug 31, 2017</p>\n",
  identifier: "hurricane-harvey-0831",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
  workExample: [],
  hasPart: [],
  dataset: [
    {
      identifier: "20170831_172754_101c",
      name: "20170831_172754_101c",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/Zspq9Zi6og54HEobM5yhLKaVsVM9oumD884bE6ie6bk3bZGkbQG3pnFPcHrxD1DZqJfeyEzu3sVbeUgfRicTH5ZU3CD4TtYUwwnhmVtHswTYNQ1btgRj",
    },
    {
      identifier: "2017831_195552_SS02",
      name: "20170831_195552_SS02",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/2gswuNaHqkejHgywXNvPgsnDjG9zZV5RTKdHMrLMT8KMRRwguD4BDYq5CtR18hjZmU8RTVH9Q373jJDYGFyDQzwFff8HuqjmCi1x64GVnMuXSdTzus",
    },
    {
      name: "20170831_195425_SS02",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/20170831_195425_SS02/20170831_195425_SS02.json",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/Zspq9Zi6og54HEobM5yhLKaVsVM9oumD884bE6ie6bk3bZGkbQG3pnFPcHrxD1DZqJffrdMf8r31NMG3egpgnD9amUVcGMSRW8DuMLQ6XYkreCoqC1SD",
    },
    {
      identifier: "20170831_162740_ssc1d1",
      name: "20170831_162740_ssc1d1",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/4i8b87XdQiswUuRec6xaGFFxh9TzMNbvmecWsgCubvdwUz7RTCMwCFqDWzdcRePrZ7NPeZkZnMTVaUdTpSfBRpv5eCqxjrjtkyxvKmfM7icHmsxoxYQimxovYM",
    },
    {
      identifier: "Houston-East-20170831-103f-100d-0f4f-RGB",
      name: "Houston-East-20170831-103f-100d-0f4f-RGB",
      url: "/item/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb/8DBoUE28VG7TU7cmFfNYkmWk6YPh9beLkAvP1djQz2RjKmx9CgBSQnfsDkyd3xtt57MNyRcSLckMsHrJLMCyrdkfRYKY39HGikkUcvjLqxrgzAynPCpBB5cpijS9rw8pwPYk8r3wkHZVp2BC9fLG8H7QDUriBU33RdfTdwQm3mX",
    },
  ],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey 08-31-2017",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const catalog1 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey (hurricane-harvey)",
  description:
    "<p>Planet Disaster Data makes imagery available directly to the public, volunteers, humanitarian organizations, and other coordinating bodies in support of the International Charter for Space and Major Disasters. This catalog of data is released for Hurricane Harvey, providing a 30 day window pre- and post-disaster. Imagery is provided under Creative Commons licenses, free of charge, with either CC-BY-SA or CC-BY-NC. All new Planet scenes are made available each day, immediately after production.</p>\n",
  identifier: "hurricane-harvey",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  workExample: [],
  hasPart: [
    {
      "@type": "DataCatalog",
      name: "8/31",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
      url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
    },
  ],
  dataset: [],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const catalog2 = {
  "@context": "https://schema.org/",
  "@type": "DataCatalog",
  name: "Hurricane Harvey (hurricane-harvey)",
  description:
    "<p>Planet Disaster Data makes imagery available directly to the public, volunteers, humanitarian organizations, and other coordinating bodies in support of the International Charter for Space and Major Disasters. This catalog of data is released for Hurricane Harvey, providing a 30 day window pre- and post-disaster. Imagery is provided under Creative Commons licenses, free of charge, with either CC-BY-SA or CC-BY-NC. All new Planet scenes are made available each day, immediately after production.</p>\n",
  identifier: "hurricane-harvey",
  keywords: ["disaster", "open"],
  license: "https://spdx.org/licenses/CC-BY-SA-4.0.html",
  isBasedOn:
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
  url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  workExample: [],
  hasPart: [
    {
      "@type": "DataCatalog",
      name: "8/31",
      isBasedOn:
        "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/hurricane-harvey-0831/catalog.json",
      url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9/6gVJjdafZByvJWGmVi22SYz429mWQC5a51N3dxfm2M5jVAtCV2ssai612o5rrijg7n6ysb",
    },
  ],
  dataset: [],
  producer: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  contributor: [
    {
      "@type": "Organization",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      name: "Planet",
      url: "http://planet.com",
    },
  ],
  copyrightHolder: [
    {
      "@type": "Organization",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      name: "Planet Disaster Team <disaster-team@planet.com>",
      url: "https://www.planet.com/disasterdata/",
    },
  ],
  provider: [
    {
      "@type": "Organization",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      name: "Google Cloud Platform",
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  isPartOf: {
    "@type": "DataCatalog",
    name: "Hurricane Harvey",
    isBasedOn:
      "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/hurricane-harvey/catalog.json",
    url: "/5k3UqPNLpDJMxoAfw1YUV9y9QsbZpgkBacBWwUJ9",
  },
  spatialCoverage: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      box: "-96 28 -93 31",
    },
  },
};

export const data = {
  id: "planet-disaster-data",
  stac_version: "1.0.0-beta.2",
  description:
    "[Planet Disaster Data](https://www.planet.com/disasterdata/) makes imagery available directly to the public, volunteers, humanitarian organizations, and other coordinating bodies in support of the International Charter for Space and Major Disasters. Data is released for individual disaster events, providing a 30 day window pre- and post-disaster. Imagery is provided under Creative Commons licenses, free of charge, with either CC-BY-SA or CC-BY-NC.",
  links: [
    {
      rel: "root",
      href: "./collection.json",
      type: "application/json",
    },
    {
      rel: "child",
      href: "./hurricane-harvey/catalog.json",
      title: "Hurricane Harvey",
    },
    {
      rel: "self",
      href: "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/collection.json",
      type: "application/json",
    },
  ],
  title: "Planet Disaster Data",
  keywords: ["disaster", "open"],
  providers: [
    {
      name: "Planet",
      description: "Contact Planet at https://www.planet.com/contact-sales/",
      roles: ["producer", "processor"],
      url: "http://planet.com",
    },
    {
      name: "Planet Disaster Team <disaster-team@planet.com>",
      description:
        "The Planet Disaster Data Team has released this data as CC-BY-SA-4.0 to help disaster response",
      roles: ["licensor"],
      url: "https://www.planet.com/disasterdata/",
    },
    {
      name: "Google Cloud Platform",
      description:
        "Hosting is done on a GCP storage bucket owned by the Planet Disaster Data team",
      roles: ["host"],
      url: "https://storage.googleapis.com/pdd-stac/",
    },
  ],
  summaries: {
    constellation: ["skysat", "planetscope"],
    platform: ["SS02", "SSC1", "101c"],
    "view:off_nadir": {
      min: 0.2,
      max: 27.3,
    },
    "view:sun_elevation": {
      min: 56.3,
      max: 65.1,
    },
    "view:sun_azimuth": {
      min: 122,
      max: 231.9,
    },
    "eo:gsd": {
      min: 0.9,
      max: 3.7,
    },
    "eo:cloud_cover": {
      min: 0,
      max: 24,
    },
  },
  extent: {
    spatial: {
      bbox: [[-96, 28, -93, 31]],
    },
    temporal: {
      interval: [["2017-08-28T10:00:00-08:00", null]],
    },
  },
  license: "CC-BY-SA-4.0",
};
