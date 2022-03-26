import Head from "next/head";
import React, { useState } from "react";
import Clima from "../components/Clima";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>Clima</Head>
      <Clima />
    </div>
  );
}
