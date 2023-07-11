import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-wh-900 text-wh-50 sm:p-10 px-10 pt-2 pb-5"
      id="contacts"
    >
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* first column */}
        <div className="mt-16 basis-1/2 sm:mt-0 sm:flex items-center justify-center">
          <h4 className="font-bold">Created by Dean Walton</h4>
        </div>
        {/* second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Navigation</h4>
          <div className="my-5">
            <Link href="#top" className="hover:underline">
              Back to Top
            </Link>
          </div>
          <div className="my-5">
            <Link href="#about-me" className="hover:underline">
              About
            </Link>
          </div>
          <div>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
          </div>
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">
            <a
              href="mailto:deanwaltondev@gmail.com"
              className="hover:underline"
            >
              deanwaltondev@gmail.com
            </a>
          </p>
          <div className="flex justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
