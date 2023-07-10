"use client";
import Image from "next/image";
import React from "react";
import JSImage from "/public/assets/skills_javascript.svg";
import TSImage from "/public/assets/skills_typescript.svg";
import ReactImage from "/public/assets/skills_react.svg";
import NextImage from "/public/assets/skills_nextjs.svg";
import HTMLImage from "/public/assets/skills_html.svg";
import CSSImage from "/public/assets/skills_css.svg";
import TailwindImage from "/public/assets/skills_tailwindcss.svg";
import NodeImage from "/public/assets/skills_nodejs.svg";
import ExpressImage from "/public/assets/skills_express.svg";
import GitImage from "/public/assets/skills_git.svg";
import GithubImage from "/public/assets/skills_github.svg";
import PostgreSQLImage from "/public/assets/skills_postgresql.svg";
import { motion } from "framer-motion";

const skillImages = [
  {
    name: "Javascript",
    image: JSImage,
  },
  {
    name: "Typescript",
    image: TSImage,
  },
  {
    name: "React",
    image: ReactImage,
  },
  {
    name: "NextJS",
    image: NextImage,
  },
  {
    name: "HTML",
    image: HTMLImage,
  },
  {
    name: "CSS",
    image: CSSImage,
  },
  {
    name: "TailwindCSS",
    image: TailwindImage,
  },
  {
    name: "NodeJS",
    image: NodeImage,
  },
  {
    name: "Express",
    image: ExpressImage,
  },
  {
    name: "Git",
    image: GitImage,
  },
  {
    name: "Github",
    image: GithubImage,
  },
  {
    name: "PostgreSQL",
    image: PostgreSQLImage,
  },
];

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section className="pt-3 pb-10 " id="about-me">
      <div className="flex items-center gap-3">
        {/* <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          test
        </div>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam
          excepturi, hic expedita nisi ipsam.
        </p> */}
        <h1 className="font-bold text-3xl md:text-5xl">About Me</h1>
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-4 sm:h-[500px] my-3">
        <motion.div
          className="col-span-2 row-span-4 text-xl sm:text-2xl rounded-xl bg-accent-orange"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <div className="flex justify-evenly items-center flex-col h-full text-xl px-5"> */}
          <p className="px-5 my-5 pt-5 sm:pt-0">
            I&apos;m a software engineer with a bias towards front-end and
            mobile development. My background is in education, hospitality, and
            aquatic saftey.
          </p>
          {/* <br /> */}
          <p className="px-5 my-5">
            Originally from O&apos;ahu, Hawai&apos;i, I now reside in Toyama,
            Japan and enjoy waking up to see the snowy tops of Mt. Tate.
          </p>
          {/* <br /> */}
          <p className="px-5 my-5 pb-5 sm:pb-0">
            I have listed some of the technologies I&apos;m familiar with but
            I&apos;m always ready to learn more! I also have showcased some of
            the projects I worked on recently or are under development.
          </p>
          {/* </div> */}
        </motion.div>
        <div className="flex items-center justify-center col-span-2 row-span-1 rounded-lg bg-accent-orange">
          <div className="font-bold text-3xl md:text-5xl py-4">
            <h1>Skills</h1>
          </div>
        </div>
        <motion.div className="col-span-2 row-span-3">
          <motion.div
            // className="mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="grid grid-cols-3 grid-rows-4 h-full gap-2 pt-5 mt-10 sm:pt-0">
              {skillImages.map((img, index) => (
                // <div key={index}>
                <div
                  key={index}
                  className="flex justify-center flex-col items-center"
                >
                  <Image
                    key={`${img.name}-${index}`}
                    // fill
                    alt={img.name}
                    // placeholder="blur"
                    src={img.image}
                    height={40}
                    width={55}
                    // sizes="(max-width: 480px) 100vw,
                    //       (max-width: 768px) 75vw,
                    //       (max-width: 1060px) 50vw,
                    //       33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {img.name}
                </div>
                // </div>
              ))}
              {/* <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div> */}
            </div>
          </motion.div>
        </motion.div>
        {/* <div className="col-span-1 row-span-1 bg-wh-500"></div> */}
      </div>
    </section>
  );
};

export default AboutMe;
