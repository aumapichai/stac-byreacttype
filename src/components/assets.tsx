import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC, Fragment, useEffect } from "react";
import { ICatalog } from "../interface";
import { StyledTableCell } from "../pages";
import { StyledTableRow } from "../pages/[slug]";

const Asset: FC<{ state: ICatalog }> = ({ state }) => {
  const { catalog } = state;
  console.log(catalog);
  // useEffect(()=>{

  // },[])
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Band(s)</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Content-Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(catalog.assets).length
              ? Object.keys(catalog.assets).map((e: any, i: any) => {
                  return (
                    <StyledTableRow key={`${e.id}_${i}`}>
                      <StyledTableCell align="left">
                        <Typography
                          key={`title_${i}`}
                          onClick={() => {
                            window.open(e.href, "_blank");
                          }}
                          sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                            color: "primary.main",
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {catalog.assets[e].title
                            ? catalog.assets[e].title
                            : catalog.assets[e].href.split("/")[
                                catalog.assets[e].href.split("/").length - 1
                              ]}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography
                          key={`rel_${i}`}
                          sx={{
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {catalog.assets[e]["eo:bands"]
                            ? catalog.assets[e]["eo:bands"][0]?.common_name
                            : ""}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography
                          key={`rel_${i}`}
                          sx={{
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {catalog.assets[e].roles
                            ? catalog.assets[e].roles?.toString()
                            : ""}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography
                          key={`rel_${i}`}
                          sx={{
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {catalog.assets[e].type ? catalog.assets[e].type : ""}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Asset;
