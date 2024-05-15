import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  className?: string;
  imageHeight: string;
  title: string;
  image?: any;
  mainLink?: string;
  demoLink?: string;
  techStack?: string;
  description: string;
};

const Card = ({
  className,
  imageHeight,
  title,
  image,
  mainLink,
  demoLink,
  techStack,
  description,
}: Props) => {
  return (
    <motion.div className={className} variants={childVariant}>
      <Link className="basis-full" href={`${mainLink}`} target="_blank">
        <div
          className={`relative w-auto mb-3 ${imageHeight} rounded-lg bg-slate-500 hover:border-4 hover:border-teal-500`}
        >
          <span className="absolute z-10 w-full h-full">
            <span className="flex justify-center items-center w-full h-full text-transparent hover:text-black hover:bg-opacity-50 hover:bg-slate-100 text-4xl font-bold">
              View Demo
            </span>
          </span>
          <Image
            fill
            alt="temp"
            className="rounded-lg"
            src={image}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`${demoLink}`} target="_blank">
          <h4 className="font-bold hover:text-teal-500">{title}</h4>
        </Link>
        <div className="flex my-3 gap-3">
          <h5 className="font-semibold text-xs">{techStack}</h5>{" "}
        </div>
        <p className="text-wh-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
