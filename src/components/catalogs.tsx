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

const Catalogs: FC<{ state: ICatalog; handleClickTo: any }> = ({
  state,
  handleClickTo,
}) => {
  const { catalog } = state;
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Title</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.links.filter((l: any) => l.rel === "child").length &&
              catalog.links
                .filter((l: any) => l.rel === "child")
                .map((e: any, i: any) => {
                  return (
                    <StyledTableRow key={`${e.title}_${i}`}>
                      <StyledTableCell align="left">
                        <Typography
                          key={`title${i}`}
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
                          {e.title ? e.title : e.href}
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

export default Catalogs;
