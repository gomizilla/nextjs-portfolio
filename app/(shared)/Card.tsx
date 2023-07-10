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
  isSmallCard?: boolean;
  // isLongForm?: boolean;
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
  isSmallCard = false,
  // isLongForm = false,
  title,
  image,
  mainLink,
  demoLink,
  techStack,
  description,
}: Props) => {
  return (
    <motion.div className={className} variants={childVariant}>
      <Link
        className="basis-full hover:opacity-70"
        href={`${mainLink}`}
        target="_blank"
      >
        <div
          className={`relative w-auto mb-3 ${imageHeight} rounded-lg bg-slate-500 hover:border-2 hover:border-green-400`}
        >
          <Image
            fill
            alt="temp"
            // placeholder="blur"
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
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
        `}
          >
            {title}
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{techStack}</h5>{" "}
          {/* 1:43 ish */}
        </div>
        <p
          // className={`text-wh-500 ${
          //   isLongForm ? "line-clamp-5" : "line-clamp-3"
          // }`}
          className="text-wh-500"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
