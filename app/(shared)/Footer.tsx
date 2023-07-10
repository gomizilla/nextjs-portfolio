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
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Dean&apos;s Portfolio</h4>
          <p className="my-5">Made with TypeScript, NextJS, and TailwindCSS</p>
          {/* <p>© Copyright dood</p> */}
        </div>
        {/* second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Navigation</h4>
          <div className="my-5">
            <Link href="#top">Back to Top</Link>
          </div>
          <div className="my-5">
            <Link href="#about-me">About</Link>
          </div>
          <div>
            <Link href="#projects">Projects</Link>
          </div>
          {/* <p className="my-5">Path of Exile 2.0 when</p> */}
          {/* <p className="my-5">GGG Pls</p> */}
          {/* <p>gib</p> */}
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">email@email.com</p>
          <div className="flex justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
