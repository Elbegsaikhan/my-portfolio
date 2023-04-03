import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About me</h1>
      <div className={"h-[20vh] flex items-center"}>
        <p>Coming soon...</p>
      </div>
    </section>
  );
}
