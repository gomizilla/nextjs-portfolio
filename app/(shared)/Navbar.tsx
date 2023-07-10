"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5" id="top">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div>
          <p className="font-bold text-xl">DW</p>
        </div>
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          {/* <Link href="/">Home</Link> */}
          <Link className="hover:text-accent-green" href="#about-me">
            About
          </Link>
          <Link className="hover:text-accent-green" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-accent-green" href="#contacts">
            Contacts
          </Link>
        </div>
      </nav>
      <motion.div className="sm:flex justify-between items-center gap-8 mt-5 mb-4 mx-10 border-2 border-green-500">
        <div className="flex items-center justify-center flex-col basis-2/3 md:mt-3 border-2 border-red-500">
          <motion.div
            className="border-2 border-yellow-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="sm:w-full text-lg">Hi, I&apos;m</p>
            <h1 className="font-bold text-2xl md:text-4xl sm:w-full">
              <span className="sm:text-7xl text-5xl">Dean Walton</span>{" "}
            </h1>
            <p className="sm:w-full text-lg">Software Engineer</p>
          </motion.div>
          {/* <p className="text-sm mt-3 mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, voluptatum!
          </p> */}
        </div>
        <div className="basis-full relative w-auto h-[400px] bg-wh-500">
          {/* <Image  /> */}
          Image here
        </div>
      </motion.div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
