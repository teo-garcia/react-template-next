import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Typography } from "../components/Typography/Typography";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <Typography className={styles.title} weight="bold" color="background">
      Hello World
    </Typography>
  );
}

export default Home;
