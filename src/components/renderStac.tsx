import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { MARKDOWN_READER, MARKDOWN_WRITER } from "../config/utils";
import { ICatalog } from "../interface";
import Asset from "./assets";
import BreadcrumbsComp from "./breadcrumbs";
import Catalogs from "./catalogs";
import Collections from "./collections";
import Items from "./items";
import Links from "./links";
import Thumbnail from "./preview";
import PreviewMap from "./previewMap";
import RightContent from "./rightContent";
import { TabComp } from "./tabStac";

const RenderStac: FC<{
  manageCatalog: ICatalog;
  handleClickTo: any;
  setManageCatalog: any;
  handleChange: any;
}> = ({ manageCatalog, handleClickTo, setManageCatalog, handleChange }) => {
  return (
    <Box component={"div"} height={"100vh"} width="100%" overflow="hidden">
      <Container maxWidth="lg">
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
                  {manageCatalog.breadcrumb.length && (
                    <Breadcrumbs aria-label="breadcrumb">
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
            <Grid container>
              <Grid
                item
                xs={
                  manageCatalog.catalog.extent || manageCatalog.catalog.bbox
                    ? 8
                    : 12
                }
              >
                {manageCatalog.catalog.title ? (
                  <Typography variant="h6" mt={2}>
                    {`${manageCatalog.catalog.title} (${manageCatalog.catalog.id})`}
                  </Typography>
                ) : (
                  <Typography variant="h6" mt={2}>
                    {`${manageCatalog.catalog.id}`}
                  </Typography>
                )}
                {manageCatalog.urlSelf && (
                  <Link href={manageCatalog.urlSelf}>
                    <a target="_blank">{manageCatalog.urlSelf}</a>
                  </Link>
                )}

                {manageCatalog.catalog.description && (
                  <div
                    style={{ fontSize: 14 }}
                    dangerouslySetInnerHTML={{
                      __html: MARKDOWN_WRITER.render(
                        MARKDOWN_READER.parse(manageCatalog.catalog.description)
                      ),
                    }}
                  ></div>
                )}
                <Box
                  sx={{
                    width: "100%",
                    typography: "body1",
                  }}
                  mt={2}
                >
                  <TabContext value={manageCatalog.type}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        {manageCatalog?.catalog?.type !== "Feature" &&
                        manageCatalog?.catalog?.type !== "FeatureCollection" ? (
                          <TabComp
                            label="Collections"
                            value="Collection"
                            disabled={
                              manageCatalog.catalog?.type &&
                              manageCatalog.catalog?.type !== "Collection"
                                ? true
                                : manageCatalog?.catalog?.links?.filter(
                                    (l: any) => l.rel === "child" && l.type
                                  ).length
                                ? false
                                : true
                            }
                          />
                        ) : null}

                        {manageCatalog?.catalog?.type !== "Feature" &&
                        manageCatalog?.catalog?.type !== "FeatureCollection" ? (
                          <TabComp
                            label="Catalogs"
                            value="Catalog"
                            disabled={
                              manageCatalog.catalog?.type &&
                              manageCatalog.catalog?.type !== "Catalog"
                                ? true
                                : manageCatalog?.catalog?.links?.filter(
                                    (l: any) => l.rel === "child"
                                  ).length
                                ? false
                                : true
                            }
                          />
                        ) : null}

                        {manageCatalog?.catalog?.type !== "Feature" &&
                        manageCatalog?.catalog?.type !== "FeatureCollection" ? (
                          <TabComp
                            label="Items"
                            value="Item"
                            disabled={
                              manageCatalog?.catalog?.links?.filter(
                                (l: any) =>
                                  l.rel === "items" || l.rel === "item"
                              ).length
                                ? false
                                : true
                            }
                          />
                        ) : null}

                        {manageCatalog?.catalog?.type === "Feature" ||
                        manageCatalog?.catalog?.type === "FeatureCollection" ? (
                          <TabComp label="Preview" value="ItemDetail" />
                        ) : null}

                        {manageCatalog?.catalog?.links.filter(
                          (rs: any) => rs.rel === "preview"
                        ).length ? (
                          <TabComp label="Thumbnail" value="Thumbnail" />
                        ) : null}
                        {manageCatalog?.catalog?.item_assets ||
                        manageCatalog.catalog?.assets ? (
                          <TabComp label="Assets" value="Assets" />
                        ) : null}

                        {manageCatalog?.catalog?.links?.filter(
                          (l: any) =>
                            l.rel !== "items" &&
                            l.rel !== "child" &&
                            l.rel !== "root" &&
                            l.rel !== "self" &&
                            l.rel !== "data" &&
                            l.rel !== "parent" &&
                            l.rel !== "item" &&
                            l.rel !== "collection"
                        ).length ? (
                          <TabComp
                            label="Links"
                            value="Links"
                            disabled={
                              manageCatalog?.catalog?.links?.filter(
                                (l: any) =>
                                  l.rel !== "items" &&
                                  l.rel !== "child" &&
                                  l.rel !== "root" &&
                                  l.rel !== "self" &&
                                  l.rel !== "data" &&
                                  l.rel !== "parent" &&
                                  l.rel !== "item" &&
                                  l.rel !== "collection"
                              ).length
                                ? false
                                : true
                            }
                          />
                        ) : null}
                      </TabList>
                    </Box>
                    <Box maxHeight={"55vh"} sx={{ overflowY: "auto" }}>
                      <TabPanel value="Collection" sx={{ px: 0, py: 2 }}>
                        <Collections
                          state={manageCatalog}
                          setState={setManageCatalog}
                          handleClickTo={handleClickTo}
                        />
                      </TabPanel>

                      <TabPanel value="Catalog" sx={{ px: 0, py: 2 }}>
                        <Catalogs
                          state={manageCatalog}
                          handleClickTo={handleClickTo}
                        />
                      </TabPanel>
                      <TabPanel value="Item" sx={{ px: 0, py: 2 }}>
                        <Items
                          state={manageCatalog}
                          handleClickTo={handleClickTo}
                          setManageCatalog={setManageCatalog}
                        />
                      </TabPanel>
                      <TabPanel value="ItemDetail" sx={{ px: 0, py: 2 }}>
                        <PreviewMap catalog={manageCatalog} />
                      </TabPanel>
                      <TabPanel value="Assets" sx={{ px: 0, py: 2 }}>
                        <Asset state={manageCatalog} />
                      </TabPanel>

                      <TabPanel value="Thumbnail" sx={{ px: 0, py: 2 }}>
                        <Thumbnail state={manageCatalog} />
                      </TabPanel>

                      <TabPanel value="Links" sx={{ px: 0, py: 2 }}>
                        <Links
                          state={manageCatalog}
                          setState={setManageCatalog}
                        />
                      </TabPanel>
                    </Box>
                  </TabContext>
                </Box>
              </Grid>
              {manageCatalog.catalog.extent || manageCatalog.catalog.bbox ? (
                <Grid item xs={4}>
                  <RightContent state={manageCatalog} />
                </Grid>
              ) : null}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default RenderStac;
