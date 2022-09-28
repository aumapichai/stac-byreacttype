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

const Collections: FC<{
  state: ICatalog;
  setState: any;
  handleClickTo: any;
}> = ({ state, handleClickTo }) => {
  const { catalog } = state;
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Identifier</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.links.filter((l: any) => l.rel === "child" && l.type)
              .length &&
              catalog.links
                .filter((l: any) => l.rel === "child" && l.type)
                .map((e: any, i: any) => {
                  return (
                    <StyledTableRow key={`${e.title}_${i}`}>
                      <StyledTableCell component="th" scope="row">
                        <Typography
                          key={`identifier${i}`}
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
                          {e.href.split("/")[e.href.split("/").length - 1]}
                        </Typography>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <Typography
                          key={`title${i}`}
                          sx={{
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {e.title}
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

export default Collections;
