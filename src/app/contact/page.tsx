import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Contact</h1>
      <div className={"mt-5"}>
        <a
          className={"font-normal  text-gray-700 underline text-2xl font-serif"}
          href="mailto:info@elbegsaihan10@gmail.com"
          target={"_blank"}
        >
          elbegsaihan10@gmail.com
        </a>
        <h1 className="font-bold text-1xl mt-4 font-serif">Social Links</h1>
        <div
          className={"flex flex-col font-serif text-sm font-light mt-1 pl-2"}
        >
          <Link href={"https://www.instagram.com/a_elbeg/"} legacyBehavior>
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              className={"hover:underline"}
            >
              Instagram
            </a>
          </Link>
          <Link
            href={"https://www.facebook.com/elbegsaihan.amgalan.7/"}
            legacyBehavior
          >
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              className={"hover:underline"}
            >
              Facebook
            </a>
          </Link>
          <Link
            passHref
            legacyBehavior
            href={"https://www.linkedin.com/in/elbegsaikhan-amgalan-619144171/"}
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={"hover:underline"}
            >
              LinkedIn
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
