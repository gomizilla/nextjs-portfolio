"use client";
import React from "react";
import Card from "../(shared)/Card";
import SneakySnake from "/public/assets/project_sneakysnake.png";
import TangoAtsumare from "/public/assets/project_tangoatsumare.webp";
import WordScramble from "/public/assets/project_wordscramble.png";
import ToyamaZon from "/public/assets/project_ToyamaZon.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

type ProjectListProps = {
  title: string;
  image?: any;
  description: string;
  techStack?: string;
  mainLink?: string;
  demoLink?: string;
};

const projectList: Array<ProjectListProps> = [
  {
    title: "ToyamaZon",
    image: ToyamaZon,
    description:
      "A basic ecommerce web app that allows users (anonymous and logged in with Google) to add/remove products from their shopping cart.",
    techStack: "Next.js | TypeScript | Prisma | MongoDB",
    mainLink: "https://ecommerce-eight-weld.vercel.app/",
    demoLink: "https://github.com/gomizilla/ecommerce",
  },
  {
    title: "Dean's English Games",
    image: WordScramble,
    description:
      "This project was made for Japanese junior high school students who have a hard time learning English. Through simple gamification, it helps students retain English vocabulary they encounter in school.",
    techStack: "JavaScript | React | MaterialUI",
    mainLink: "https://deans-english-games.vercel.app/",
    demoLink: "https://github.com/gomizilla/Deans-English-Games",
  },
  {
    title: "Tango Atsumare",
    image: TangoAtsumare,
    description:
      "Tango Atsumare helps users expand their vocabulary by making the process of creating high quality flashcards easier and more fun than ever before.",
    techStack:
      "TypeScript | React Native | NodeJS | ExpressJS | MongoDB | Firebase",
    mainLink: "https://www.youtube.com/watch?v=PSH1h7tCUjM",
    demoLink: "https://github.com/tangoatsumare/tangoatsumare-readme",
  },
  {
    title: "Sneaky Snake",
    image: SneakySnake,
    description: "A simple game made to learn Java.",
    techStack: "Java",
    mainLink: "https://github.com/gomizilla/Sneaky-Snake",
    demoLink: "https://github.com/gomizilla/Sneaky-Snake",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8 sm:pt-10 pt-8">
        <h1 className="font-bold text-3xl md:text-5xl">Projects</h1>
      </div>
      <motion.div
        className="grid sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-x-8 gap-y-8 my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {projectList.map((project: ProjectListProps, index) => (
          <Card
            key={`${project.title}-${index}`}
            className="col-span-1 row-span-3"
            imageHeight="h-56"
            title={project.title}
            image={project.image}
            mainLink={project.mainLink}
            demoLink={project.demoLink}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
