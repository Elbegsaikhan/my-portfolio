"use client";
import React from "react";
import NextNProgress from "nextjs-progressbar";

const ProgressBar = () => {
  return (
    <NextNProgress
      color="black"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  );
};

export default ProgressBar;
