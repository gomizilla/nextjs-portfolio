import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 p-10" id="footer">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* first column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">portfolio of the foocha</h4>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            excepturi exercitationem fugiat ullam aliquam obcaecati.
          </p>
          <p>© Copyright dood</p>
        </div>
        {/* second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Navigation</h4>
          <p className="my-5">
            <Link href="/">Home</Link>
          </p>
          <p className="my-5">
            <Link href="#about-me">About</Link>
          </p>
          <p>
            <Link href="#projects">Projects</Link>
          </p>
          {/* <p className="my-5">Path of Exile 2.0 when</p> */}
          {/* <p className="my-5">GGG Pls</p> */}
          {/* <p>gib</p> */}
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">email@email.com</p>
          <p className="flex justify-start">
            <SocialLinks />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
