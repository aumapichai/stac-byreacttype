import { Box, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";
import React, { FC, Fragment } from "react";
import { ICatalog } from "../interface";
import MapRightContent from "./mapRightContent";
import { uniq, upperFirst } from "lodash";
import { isValidDate } from "../config/utils";
const RightContent: FC<{ state: ICatalog }> = ({ state }) => {
  const { catalog } = state;

  return (
    <Fragment>
      <Stack sx={{ my: 2, pl: 2 }}>
        <Stack spacing={2} sx={{ bgcolor: "gray", p: 2, borderRadius: "4px" }}>
          <MapRightContent state={state} />
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body1">Metadata</Typography>
              </Grid>

              {catalog.keywords && catalog.keywords.length ? (
                <Fragment>
                  <Grid item xs={5}>
                    <Typography variant="body2">Keyword</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">
                      {String(catalog.keywords.toString())
                        .split(",")
                        .join(", ")}
                    </Typography>
                  </Grid>
                </Fragment>
              ) : null}

              {catalog.collection ? (
                <Fragment>
                  <Grid item xs={5}>
                    <Typography variant="body2">Collection</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      variant="body2"
                      onClick={() => {
                        window.open(
                          catalog.links.find((l: any) => l.rel === "collection")
                            ? catalog.links.find(
                                (l: any) => l.rel === "collection"
                              ).href
                            : "",
                          "_blank"
                        );
                      }}
                      sx={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "primary.main",
                      }}
                    >
                      {catalog.collection}
                    </Typography>
                  </Grid>
                </Fragment>
              ) : null}

              {catalog.properties ? (
                <Fragment>
                  {Object.keys(catalog.properties).map((rs) => {
                    return rs.split(":").length > 1 ||
                      rs === "providers" ? null : (
                      <Fragment key={rs}>
                        <Grid item xs={5}>
                          <Typography variant="body2">{rs}</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          {rs === "license" ? (
                            <Typography
                              onClick={() => {
                                window.open(
                                  catalog.links.find(
                                    (l: any) => l.rel === "license"
                                  )
                                    ? catalog.links.find(
                                        (l: any) => l.rel === "license"
                                      ).href
                                    : "",
                                  "_blank"
                                );
                              }}
                              sx={{
                                cursor: "pointer",
                                textDecoration: "underline",
                                color: "primary.main",
                              }}
                            >
                              {catalog.properties[rs]}
                            </Typography>
                          ) : (
                            <Typography variant="body2">
                              {isValidDate(catalog.properties[rs])
                                ? moment(catalog.properties[rs]).format("LLL")
                                : catalog.properties[rs]}
                            </Typography>
                          )}
                        </Grid>
                      </Fragment>
                    );
                  })}
                </Fragment>
              ) : null}

              {catalog.stac_version ? (
                <Fragment>
                  <Grid item xs={5}>
                    <Typography variant="body2">STAC version</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">
                      {catalog.stac_version}
                    </Typography>
                  </Grid>
                </Fragment>
              ) : null}

              {catalog.properties ? (
                <Fragment>
                  {uniq(
                    Object.keys(catalog.properties)
                      .filter(
                        (rs) => rs.split(":").length > 1 && rs !== "providers"
                      )
                      .map((rs) => rs.split(":")[0])
                  ).map((rs, i) => {
                    return (
                      <Fragment key={rs}>
                        <Grid item xs={12}>
                          <Typography variant="body1">
                            {upperFirst(rs)}
                          </Typography>
                        </Grid>
                        {Object.keys(catalog.properties)
                          .filter(
                            (p) =>
                              p.split(`${rs}:`).length > 1 && p !== "providers"
                          )
                          .map((f) => {
                            return (
                              <Fragment key={f}>
                                <Grid item xs={5}>
                                  <Typography variant="body2">
                                    {upperFirst(
                                      f.split(`${rs}:`)[1].split("_").join(" ")
                                    )}
                                  </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                  <Typography variant="body2">
                                    {catalog.properties[f]}
                                  </Typography>
                                </Grid>
                              </Fragment>
                            );
                          })}
                      </Fragment>
                    );
                  })}
                  {Object.keys(catalog.properties)
                    .filter((rs) => rs === "providers")
                    .map((p) => {
                      return (
                        <Fragment>
                          <Typography variant="body1">{p}</Typography>
                          {catalog.properties[p].map((e: any, i: any) => {
                            return (
                              <Fragment key={e.attribution}>
                                <Grid item xs={12}>
                                  <Stack direction={"row"} spacing={0.5}>
                                    <Typography variant="body2">
                                      {`${i + 1}.`}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                        color: "primary.main",
                                      }}
                                      onClick={() =>
                                        window.open(e.url, "_blank")
                                      }
                                    >
                                      {e.name}
                                    </Typography>
                                    <Typography variant="body2">
                                      ({e.roles.toString()})
                                    </Typography>
                                  </Stack>
                                </Grid>
                              </Fragment>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                </Fragment>
              ) : null}

              {catalog.license ? (
                <Fragment>
                  <Grid item xs={5}>
                    <Typography variant="body2">License</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      variant="body2"
                      onClick={() => {
                        window.open(
                          catalog.links.find((l: any) => l.rel === "license")
                            ? catalog.links.find(
                                (l: any) => l.rel === "license"
                              ).href
                            : "",
                          "_blank"
                        );
                      }}
                      sx={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "primary.main",
                      }}
                    >
                      {catalog.license}
                    </Typography>
                  </Grid>
                </Fragment>
              ) : null}

              {catalog.extent?.temporal?.interval ? (
                <Fragment>
                  <Grid item xs={5}>
                    <Typography variant="body2">Temporal Extent</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">
                      {moment(catalog.extent?.temporal?.interval[0][0]).format(
                        "LLL"
                      )}{" "}
                      {catalog.presentable ? "- Now" : ""}
                    </Typography>
                  </Grid>
                </Fragment>
              ) : null}

              {catalog.providers ? (
                <Fragment>
                  <Typography variant="body1">Providers</Typography>
                  {catalog.providers.map((e: any, i: any) => {
                    return (
                      <Fragment key={e.attribution}>
                        <Grid item xs={12}>
                          <Stack direction={"row"} spacing={0.5}>
                            <Typography variant="body2">
                              {`${i + 1}.`}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                cursor: "pointer",
                                textDecoration: "underline",
                                color: "primary.main",
                              }}
                              onClick={() => window.open(e.url, "_blank")}
                            >
                              {e.name}
                            </Typography>
                            <Typography variant="body2">
                              ({e.roles.toString()})
                            </Typography>
                          </Stack>
                        </Grid>
                      </Fragment>
                    );
                  })}
                </Fragment>
              ) : null}
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default RightContent;
