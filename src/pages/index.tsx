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
import { useRouter } from "next/router";

import { Fragment, SyntheticEvent, useEffect, useState } from "react";
import Catalogs from "../components/catalogs";
import Collections from "../components/collections";
import Links from "../components/links";
import PreviewMap from "../components/previewMap";
import { TabComp } from "../components/tabStac";
import {
  decodeURL,
  MARKDOWN_READER,
  MARKDOWN_WRITER,
  slugURL,
} from "../config/utils";
import { ICatalog } from "../interface";

// interface IHrefandtitle {
//   href: string;
//   title: string;
// }

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
  return <Fragment></Fragment>;
};

export const getServerSideProps: GetServerSideProps = async (
  _context: GetServerSidePropsContext
) => {
  return {
    redirect: {
      destination: `/index`,
      permanent: false,
    },
  };
};

export default Home;
