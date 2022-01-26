import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Typography } from "../components/Typography/Typography";
import styles from "../styles/Home.module.css";

const Home: NextPage = function () {
  return (
    <Typography
      style={{ fontSize: "8rem" }}
      weight="bold"
      tagName="h1"
      color="background"
    >
      React Template Next
    </Typography>
  );
};

export default Home;
