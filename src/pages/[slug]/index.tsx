import styled from "@emotion/styled";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  // Box,
  // Breadcrumbs,
  // Container,
  // Stack,
  TableCell,
  tableCellClasses,
  TableRow,
  // Typography,
} from "@mui/material";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
// import Link from "next/link";
import { useRouter } from "next/router";

import { Fragment, SyntheticEvent, useEffect, useState } from "react";
// import Asset from "../../components/assets";
// import Catalogs from "../../components/catalogs";
// import Collections from "../../components/collections";
// import Items from "../../components/items";
// import Links from "../../components/links";
// import PreviewMap from "../../components/previewMap";
import dynamic from "next/dynamic";
const RenderStac = dynamic(import("../../components/renderStac"), {
  ssr: false,
});

// import { TabComp } from "../../components/tabStac";
import {
  decodeURL,
  // MARKDOWN_READER,
  // MARKDOWN_WRITER,
  slugURL,
} from "../../config/utils";
import { ICatalog } from "../../interface";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f3f3f3",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home: NextPage<{ catalogJson: any; mainURL: string }> = ({
  catalogJson,
}) => {
  const { push } = useRouter();
  const [manageCatalog, setManageCatalog] = useState<ICatalog>({
    catalog: catalogJson,
    urlSelf: "",
    child: [],
    items: [],
    breadcrumb: [],
    type: "Catalog",
    type_detail: "preview",
  });

  useEffect(() => {
    if (manageCatalog?.catalog) {
      //หา url self
      const url_self = manageCatalog.catalog?.links
        .filter((e: any) => e.rel === "self")
        .reduce((preV: any, curV: any) => {
          return curV.href;
        }, "");

      const itemChild = manageCatalog.catalog?.links
        .filter((e: any) => e.rel === "child")
        .map((e: any) => {
          return {
            href: e.href,
            title: e.title ? e.title : e.href,
          };
        }, []);

      setManageCatalog((val) => {
        return {
          ...val,
          type: manageCatalog?.catalog?.type
            ? manageCatalog?.catalog?.type
            : "Catalog",
          urlSelf: url_self,
          child: itemChild,
          breadcrumb: [
            {
              title: manageCatalog.catalog?.title
                ? manageCatalog.catalog.title
                : manageCatalog.catalog.id,
              href: url_self,
            },
          ],
        };
      });
    }
  }, []);

  useEffect(() => {
    const itemChild = manageCatalog.catalog.links
      .filter((e: any) => e.rel === "child")
      .map((e: any) => {
        return {
          href: e.href,
          title: e.title ? e.title : e.href,
        };
      }, []);
    const itemList = manageCatalog.catalog.links
      .filter((e: any) => e.rel === "item")
      .map((e: any) => {
        return {
          href: e.href,
          title: e.title ? e.title : e.href,
        };
      }, []);

    setManageCatalog((val) => {
      return { ...val, child: itemChild, items: itemList };
    });
  }, [manageCatalog.catalog]);

  const readJsonNew = async (url: string) => {
    push(`/${slugURL(url)}`);

    const catalogJson = await fetch(`${url}`).then((response) =>
      response.json()
    );

    const breadcurmbList = manageCatalog.breadcrumb.filter(
      (e) => e.href === url
    ).length;
    if (breadcurmbList === 0) {
      setManageCatalog((val) => {
        return {
          ...val,
          breadcrumb: [
            ...val.breadcrumb,
            {
              title: catalogJson.title ? catalogJson.title : catalogJson.id,
              href: url,
            },
          ],
        };
      });
    }
    if (breadcurmbList === 1) {
      const indexBreadcrumb = manageCatalog.breadcrumb.findIndex(
        (x) => x.href === url
      );
      setManageCatalog((val) => {
        return {
          ...val,
          breadcrumb: val.breadcrumb.slice(0, indexBreadcrumb + 1),
        };
      });
    }
    setManageCatalog((val: any) => {
      return {
        ...val,
        catalog: catalogJson,
        type: catalogJson.links.filter(
          (l: any) => l.rel === "items" || l.rel === "item"
        ).length
          ? "Item"
          : catalogJson.type
          ? catalogJson.type
          : "Catalog",
      };
    });
  };

  const handleClickTo = (url: string, type: "next" | "back") => {
    let urlNew: string = "";
    if (type === "next") {
      if (url.includes("./")) {
        const thisUrlSplit = url.split("./");
        const thisUrl = thisUrlSplit[thisUrlSplit.length - 1];
        const splitURL = manageCatalog.urlSelf.split("/");
        urlNew = manageCatalog.urlSelf.replace(
          `/${splitURL[splitURL.length - 1]}`,
          `/${thisUrl}`
        );
      } else {
        urlNew = url;
      }
    }

    if (type === "back") {
      urlNew = url;
    }

    setManageCatalog((val) => {
      return { ...val, urlSelf: urlNew };
    });
    readJsonNew(urlNew);
  };

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setManageCatalog((val: any) => {
      return { ...val, type: newValue };
    });
  };

  //   const handleChangeItemDetail = (event: SyntheticEvent, newValue: string) => {
  //     setManageCatalog((val: any) => {
  //       return { ...val, type_detail: newValue };
  //     });
  //   };

  return (
    <RenderStac
      manageCatalog={manageCatalog}
      setManageCatalog={setManageCatalog}
      handleChange={handleChange}
      handleClickTo={handleClickTo}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  _context: GetServerSidePropsContext
) => {
  const { slug } = _context.query;
  // const mainURL = "https://eod-catalog-svc-prod.astraea.earth/";
  const mainURL = "https://storage.googleapis.com/cfo-public/catalog.json";

  try {
    const catalogJson = await fetch(
      slug === "index" ? mainURL : decodeURL(slug as string)
    ).then((response) => response.json());

    return {
      props: {
        catalogJson: catalogJson,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: `/index`,
        permanent: false,
      },
    };
  }
};

export default Home;
