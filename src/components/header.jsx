import React from "react";
import Head from "next/head";

const FAV = require("@/assets/favicon.ico").default.src;

export const Header = () => {
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>Scrawlr Test</title>
      <link rel="icon" href={FAV} />
    </Head>
  );
};
