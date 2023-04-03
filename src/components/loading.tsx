"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  animations,
} from "framer-motion";
import { Kaisei_Decol } from "next/font/google";

const kaisei = Kaisei_Decol({ subsets: ["latin"], weight: "700" });

type LoadingProps = { children: React.ReactNode };
const Loading = ({ children }: LoadingProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform<number, number>(count, Math.round);
  const [isEnd, setEnd] = useState(false);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 1.9 });
    animation.then(() => setEnd(true));
    return animation.stop;
  }, []);

  return !isEnd ? (
    <div
      className={`${kaisei.className} h-screen text-black flex items-center flex-col justify-center dark:bg-[#111010] dark:text-white text-5xl`}
    >
      <motion.h1>{rounded}</motion.h1>
    </div>
  ) : (
    <>{children}</>
  );
};
export default Loading;
