import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC, Fragment, useEffect, useState } from "react";
import { ICatalog } from "../interface";
import { StyledTableCell, StyledTableRow } from "../pages";
import moment from "moment";

const Items: FC<{
  state: ICatalog;
  handleClickTo: any;
  setManageCatalog: any;
}> = ({ state, handleClickTo, setManageCatalog }) => {
  const { catalog } = state;
  const [list, setList] = useState<any[]>([]);
  const [pagination, setPagination] = useState<{ limit: number }>({
    limit: 10,
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const get = await fetch(`${state.urlSelf}/items`)
          .then(async (rs) => {
            return {
              code: rs.status,
              data: await rs.json(),
            };
          })
          .then((rs) => rs)
          .catch((err) => err);
        if (get.code === 200) {
          setList(get.data.features ? get.data.features : []);
        } else {
          const filter = catalog.links.filter((l: any) => l.rel === "item");

          const fetchFilter = await filter.map(async (f: any) => {
            const data = await fetch(f.href)
              .then(async (h) => {
                return await h.json();
              })
              .then((h) => h)
              .catch((err) => console.log(err));
            return data;
          });

          const resolve = await Promise.all(fetchFilter);
          setList(resolve);
        }
      } catch (error) {
        const filter = catalog.links.filter((l: any) => l.rel === "item");
        const fetchFilter = await filter.map(async (f: any) => {
          const data = await fetch(f.href)
            .then(async (h) => {
              return await h.json();
            })
            .then((h) => h)
            .catch((err) => console.log(err));
          return data;
        });

        const resolve = await Promise.all(fetchFilter);
        setList(resolve);
      }
    };
    getList();
    return () => {};
  }, []);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Date Acquired</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.length
              ? list.map((e: any, i: any) => {
                  return (
                    <StyledTableRow key={`${e.id}_${i}`}>
                      <StyledTableCell align="left">
                        <Typography
                          key={`title_${i}`}
                          onClick={() => {
                            // console.log(e);
                            // console.log(state);
                            setManageCatalog({
                              ...state,
                              catalog: {
                                ...e,
                                keywords: catalog?.keywords,
                                providers: catalog?.providers,
                              },
                              type: "ItemDetail",
                              urlSelf: e.links.find(
                                (l: any) => l.rel === "self"
                              )?.href,
                              breadcrumb: [
                                ...state.breadcrumb,
                                {
                                  title: e.id ? e.id : e.title,
                                  href: e.links.find(
                                    (l: any) => l.rel === "self"
                                  )?.href,
                                },
                              ],
                            });
                          }}
                          sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                            color: "primary.main",
                            fontSize: "14px",
                          }}
                          variant="body1"
                        >
                          {e.id}
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
                          {e.properties?.datetime
                            ? moment(e.properties?.datetime).format(
                                "MMMM Do YYYY, h:mm:ss a"
                              )
                            : "NULL"}
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

export default Items;
