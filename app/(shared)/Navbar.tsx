"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import SelfPicture from "public/assets/dean_pic_full.jpg";
import NavbarIcon from "public/assets/dean_navicon.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5" id="top">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div>
          <p className="font-bold text-xl">
            <Image alt="Initials DW" src={NavbarIcon} height={32} width={32} />
          </p>
        </div>
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link className="hover:text-teal-500 text-lg" href="#about-me">
            About
          </Link>
          <Link className="hover:text-teal-500 text-lg" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-teal-500 text-lg" href="#contacts">
            Contacts
          </Link>
        </div>
      </nav>
      <motion.div className="sm:flex justify-between items-center gap-8 mt-5 mb-4 mx-10">
        <div className="flex items-center justify-center flex-col basis-3/5 md:mt-3 py-5">
          <motion.div
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
              <span className="sm:text-7xl md:text-8xl text-5xl">
                Dean Walton
              </span>{" "}
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: 300 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="sm:w-full sm:text-3xl text-xl">Software Engineer</p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="sm:basis-2/5 relative w-auto h-[400px] rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            fill
            alt="dean-picture"
            src={SelfPicture}
            sizes="(max-width: 480px) 100vw,
              (max-width: 768px) 75vw,
              (max-width: 1060px) 50vw,
              33vw"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </motion.div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
