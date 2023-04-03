import Link from "next/link";
import Image from "next/image";
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from "#/components/icons";
import { name, about, bio, avatar } from "#/lib/info";

export default async function Home() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p
        className={"my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200 "}
      >
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          src={avatar}
          className="rounded-full grayscale"
          placeholder="blur"
          width={100}
          priority
        />
        <div className="hidden mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            className="flex items-center gap-2"
            rel="noopener noreferer"
            target={"_blank"}
            href={""}
          >
            <TwitterIcon />
            1230 tweets all time
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Elbegsaikhan"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
          </a>
          <Link href="/" className="flex items-center">
            <ViewsIcon />
            123 blog views all time
          </Link>
        </div>
      </div>
    </section>
  );
}
