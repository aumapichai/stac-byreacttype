import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC, Fragment } from "react";
import { ICatalog } from "../interface";
import { StyledTableCell, StyledTableRow } from "../pages";

const Links: FC<{ state: ICatalog; setState: any }> = ({ state, setState }) => {
  const { catalog } = state;
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Link</StyledTableCell>
              <StyledTableCell align="left">Relation</StyledTableCell>
              <StyledTableCell align="left"> Content-Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.links.filter(
              (e: any) =>
                e.rel !== "items" &&
                e.rel !== "child" &&
                e.rel !== "root" &&
                e.rel !== "self" &&
                e.rel !== "data" &&
                e.rel !== "parent" &&
                e.rel !== "item" &&
                e.rel !== "collection"
            ).length &&
              catalog.links
                .filter(
                  (e: any) =>
                    e.rel !== "items" &&
                    e.rel !== "child" &&
                    e.rel !== "root" &&
                    e.rel !== "self" &&
                    e.rel !== "data" &&
                    e.rel !== "parent" &&
                    e.rel !== "item" &&
                    e.rel !== "collection"
                )
                .map((e: any, i: any) => {
                  return (
                    <StyledTableRow key={`${e.title}_${i}`}>
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
                          {e.title ? e.title : e.href}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography
                          key={`rel_${i}`}
                          onClick={() => {}}
                          sx={{
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {e.rel}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography
                          key={`type_${i}`}
                          onClick={() => {}}
                          sx={{
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {e.type}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Links;
