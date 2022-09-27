import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Breadcrumbs,
  Container,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Link from "next/link";

import { Fragment, SyntheticEvent, useEffect, useState } from "react";

interface IHrefandtitle {
  href: string;
  title: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f3f3f3",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home: NextPage<{ catalogJson: any }> = ({ catalogJson }) => {
  const [manageCatalog, setManageCatalog] = useState<{
    catalog: any;
    urlSelf: string;
    child: IHrefandtitle[];
    items: IHrefandtitle[];
    breadcrumb: IHrefandtitle[];
    type: "collections" | "catalogs" | "items" | "items_detail";
    type_detail: "preview" | "thumbnail" | "assets";
  }>({
    catalog: catalogJson,
    urlSelf: "",
    child: [],
    items: [],
    breadcrumb: [],
    type: "collections",
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
    const catalogJson = await fetch(`${url}`).then((response) =>
      response.json()
    );
    console.log(catalogJson);

    const linkRoot = catalogJson.links.filter((e: any) => e.rel === "root");
    let hrefPahtLength: string = "collections";
    if (linkRoot[0].href.split("../").length === 1) {
      hrefPahtLength = "collections";
    }
    if (linkRoot[0].href.split("../").length === 2) {
      hrefPahtLength = "catalogs";
    }
    if (linkRoot[0].href.split("../").length === 3) {
      hrefPahtLength = "items";
    }
    if (linkRoot[0].href.split("../").length === 4) {
      hrefPahtLength = "items_detail";
      setManageCatalog((val: any) => {
        return { ...val, type_detail: "preview" };
      });
    }

    console.log(linkRoot[0].href.split("../").length);

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
      return { ...val, catalog: catalogJson, type: `${hrefPahtLength}` };
    });
  };

  const handleClickTo = (url: string, type: "next" | "back") => {
    let urlNew: string = "";
    if (type === "next") {
      const thisUrlSplit = url.split("./");
      const thisUrl = thisUrlSplit[thisUrlSplit.length - 1];
      const splitURL = manageCatalog.urlSelf.split("/");
      urlNew = manageCatalog.urlSelf.replace(
        `/${splitURL[splitURL.length - 1]}`,
        `/${thisUrl}`
      );
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

  const handleChangeItemDetail = (event: SyntheticEvent, newValue: string) => {
    setManageCatalog((val: any) => {
      return { ...val, type_detail: newValue };
    });
  };

  return (
    <Fragment>
      <Container maxWidth="md">
        {manageCatalog.catalog && (
          <>
            {manageCatalog.catalog.id && (
              <Stack direction="row" alignItems="center" mt={2}>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    borderRadius: "4px",
                    backgroundColor: "gray",
                    padding: "10px",
                  }}
                >
                  {/* {catalog.id} */}

                  {manageCatalog.breadcrumb.length && (
                    <Breadcrumbs
                      // separator="›"
                      aria-label="breadcrumb"
                    >
                      {manageCatalog.breadcrumb.slice(0, -1).map((e, i) => {
                        return (
                          <Box
                            key={`breadcrumbs_${i}`}
                            onClick={() => {
                              handleClickTo(e.href, "back");
                            }}
                            sx={{ color: "white", cursor: "pointer" }}
                          >
                            {e.title}
                          </Box>
                        );
                      })}
                      <Typography variant="body2">
                        {manageCatalog.breadcrumb[
                          manageCatalog.breadcrumb.length - 1
                        ].title
                          ? manageCatalog.breadcrumb[
                              manageCatalog.breadcrumb.length - 1
                            ].title
                          : ""}
                      </Typography>
                    </Breadcrumbs>
                  )}
                </Box>
              </Stack>
            )}

            {manageCatalog.catalog.title ? (
              <Typography variant="h4" mt={2}>
                {`${manageCatalog.catalog.title} (${manageCatalog.catalog.title
                  .split(" ")
                  .join("-")})`}
              </Typography>
            ) : (
              <Typography variant="h4" mt={2}>
                {`${manageCatalog.catalog.id} (${manageCatalog.catalog.id
                  .split(" ")
                  .join("-")})`}
              </Typography>
            )}

            {manageCatalog.urlSelf && (
              <Link href={manageCatalog.urlSelf}>
                <a target="_blank">{manageCatalog.urlSelf}</a>
              </Link>
            )}

            {manageCatalog.catalog.description && (
              <Typography variant="body1" mt={2}>
                {manageCatalog.catalog.description}
              </Typography>
            )}
            {manageCatalog.type === "items_detail" && (
              <Box sx={{ width: "100%", typography: "body1" }} mt={2}>
                <TabContext value={manageCatalog.type_detail}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChangeItemDetail}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Preview" value="preview" />
                      {manageCatalog.catalog.assets?.thumbnail && (
                        <Tab label="Thumbnail" value="thumbnail" />
                      )}
                      {manageCatalog.catalog.assets && (
                        <Tab label="Assets" value="assets" />
                      )}
                    </TabList>
                  </Box>
                  <TabPanel value="preview" sx={{ px: 0, py: 2 }}></TabPanel>
                  {manageCatalog.catalog.assets?.thumbnail && (
                    <TabPanel value="thumbnail" sx={{ px: 0, py: 2 }}>
                      <Box
                        component="img"
                        src={`${manageCatalog.catalog.assets?.thumbnail?.href}`}
                        sx={{ width: "100%" }}
                      />
                    </TabPanel>
                  )}
                  {manageCatalog.catalog.assets && (
                    <TabPanel value="assets" sx={{ px: 0, py: 2 }}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Name</StyledTableCell>
                              <StyledTableCell align="left">
                                Roles
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                Content-Type
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {/* <StyledTableRow> */}
                            {Object.keys(manageCatalog.catalog.assets).map(
                              (key, index) => {
                                return (
                                  <StyledTableRow key={`${key}_${index}`}>
                                    <StyledTableCell component="th" scope="row">
                                      {manageCatalog.catalog.assets[key].title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                      {manageCatalog.catalog.assets[
                                        key
                                      ].roles.join(",")}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                      {manageCatalog.catalog.assets[key].type}
                                    </StyledTableCell>
                                  </StyledTableRow>
                                );
                              }
                            )}
                            {/* <StyledTableCell component="th" scope="row">
                                dd
                              </StyledTableCell>
                              <StyledTableCell align="left">gg</StyledTableCell>
                              <StyledTableCell align="left">
                                eee
                              </StyledTableCell> */}
                            {/* </StyledTableRow> */}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                  )}
                </TabContext>
              </Box>
            )}
            {manageCatalog.type !== "items_detail" && (
              <Box sx={{ width: "100%", typography: "body1" }} mt={2}>
                <TabContext value={manageCatalog.type}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        label="Collections"
                        value="collections"
                        disabled={
                          manageCatalog.type === "collections" ? false : true
                        }
                      />
                      <Tab
                        label="Catalogs"
                        value="catalogs"
                        disabled={
                          manageCatalog.type === "catalogs" ? false : true
                        }
                      />
                      <Tab
                        label="Items"
                        value="items"
                        disabled={manageCatalog.type === "items" ? false : true}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="collections" sx={{ px: 0, py: 2 }}>
                    {manageCatalog.child.length &&
                      manageCatalog.child.map((e, i) => {
                        return (
                          <Typography
                            key={`collections_${i}`}
                            onClick={() => {
                              handleClickTo(e.href, "next");
                            }}
                            sx={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              color: "primary.main",
                              fontSize: "14px",
                            }}
                            variant="body1"
                          >
                            {e.title}
                          </Typography>
                        );
                      })}
                  </TabPanel>
                  <TabPanel value="catalogs" sx={{ px: 0, py: 2 }}>
                    {manageCatalog.child.length &&
                      manageCatalog.child.map((e, i) => {
                        return (
                          <Typography
                            key={`catalogs_${i}`}
                            onClick={() => {
                              handleClickTo(e.href, "next");
                            }}
                            sx={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              color: "primary.main",
                              fontSize: "14px",
                            }}
                            variant="body1"
                          >
                            {e.title}
                          </Typography>
                        );
                      })}
                  </TabPanel>
                  <TabPanel value="items" sx={{ px: 0, py: 2 }}>
                    {manageCatalog.items.length &&
                      manageCatalog.items.map((e, i) => {
                        return (
                          <Typography
                            key={`items_${i}`}
                            onClick={() => {
                              handleClickTo(e.href, "next");
                            }}
                            sx={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              color: "primary.main",
                              fontSize: "14px",
                            }}
                            variant="body1"
                          >
                            {e.title}
                          </Typography>
                        );
                      })}
                  </TabPanel>
                </TabContext>
              </Box>
            )}
          </>
        )}
      </Container>
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

export default Home;
