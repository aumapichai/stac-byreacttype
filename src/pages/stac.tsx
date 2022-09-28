import { Typography } from "@mui/material";
const base58 = require("bs58");
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useEffect, useState } from "react";

interface IDateSTAC {
  name: string;
  description: string;
  isBasedOn: string;
  url: string;
  dataset: IDataset[];
}

interface IDataset {
  name: string;
  isBasedOn: string;
  url: string;
}

const Stac: NextPage<{ catalogJson: any }> = ({ catalogJson }) => {
  const { push, query } = useRouter();
  const [dataStac, setDataStac] = useState<IDateSTAC | null>(null);
  useEffect(() => {
    if (catalogJson) {
      //หา url self
      const url_self = catalogJson.links
        .filter((f: any) => f.rel === "self")
        .map((e: any) => e.href)
        .join();

      const dataset = catalogJson.links
        ? catalogJson.links
            .filter((f: any) => f.rel === "child")
            .map((e: any) => {
              return {
                name: e.title ? e.title : e.href,
                isBasedOn: `${makeRelativeLast(url_self)}${makeRelative(
                  e.href
                )}`,
                url: `/${base58.encode(Buffer.from(makeRelative(e.href)))}`,
              };
            })
        : [];

      setDataStac({
        name: catalogJson.id,
        description: catalogJson.description,
        isBasedOn: url_self,
        url: "/",
        dataset: dataset,
      });
    }
  }, []);

  const useCallbackURL = useCallback(() => {
    console.log(dataStac);
  }, [dataStac]);

  useEffect(() => {
    if (query.url) {
      const urlOn = query.url;
      const data = dataStac?.dataset.find((x) => x.url === urlOn);
      //   console.log(dataStac);
      //   const thisIsBaseOn = data?.isBasedOn ? data.isBasedOn : "";
      //   const thisUrl = data?.url ? data.url : "";
      //   readerUrlNew(thisIsBaseOn, thisUrl);
    }
  }, [query]);

  const readerUrlNew = async (isBasedOn: string, uri: string) => {
    const resultJson = await fetch(`${isBasedOn}`).then((response) =>
      response.json()
    );
    setDataStac((val: any) => {
      return { ...val, url: uri };
    });
  };

  //ตัด ./ or ../
  const makeRelative = (uri: string) => {
    return uri.replace(/(^[.][.][/])|(^[.][/])/g, "");
  };

  // ตัด url ท้ายสุด หลัง /
  const makeRelativeLast = (uri: string) => {
    const splitURI = uri.split("/");
    return uri.replace(`${splitURI[splitURI.length - 1]}`, "");
  };

  return (
    <Fragment>
      {dataStac && (
        <>
          {dataStac.name && (
            <Typography variant="h4" mt={2}>
              {`${dataStac.name} (${dataStac.name.split(" ").join("-")})`}
            </Typography>
          )}
          {dataStac.isBasedOn && (
            <Link href={dataStac.isBasedOn}>
              <a target="_blank">{dataStac.isBasedOn}</a>
            </Link>
          )}

          {dataStac.description && (
            <Typography variant="body1" mt={2}>
              {dataStac.description}
            </Typography>
          )}

          {dataStac.dataset.length &&
            dataStac.dataset.map((e, i) => {
              return (
                <Typography
                  key={`collections_${i}`}
                  onClick={() => {
                    // useCallbackURL();
                    push(`stac?url=${e.url}`);
                  }}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "primary.main",
                    fontSize: "14px",
                  }}
                  variant="body1"
                >
                  {e.name}
                </Typography>
              );
            })}
        </>
      )}
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  _context: GetServerSidePropsContext
) => {
  const catalogJson = await fetch(
    "https://raw.githubusercontent.com/cholmes/pdd-stac/beta2/disasters/collection.json"
  ).then((response) => response.json());

  return {
    props: {
      catalogJson: catalogJson,
    },
  };
};

export default Stac;
