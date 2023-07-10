import React from "react";
import SocialLinks from "../(shared)/SocialLinks";
import Image from "next/image";
import NorthShoreBeach from "public/assets/extra_beach.jpg";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <div className="sm:grid grid-cols-2 gap-8 pt-10">
        <div className="col-span-1">
          <div className="basis-full relative w-auto h-96 bg-wh-500">
            <Image
              fill
              alt="waikiki-beach"
              src={NorthShoreBeach}
              sizes="(max-width: 480px) 100vw,
              (max-width: 768px) 75vw,
              (max-width: 1060px) 50vw,
              33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="gap-3 mt-8 mb-3">
            <h1 className="font-bold text-3xl md:text-5xl">Contacts</h1>
          </div>
          <div className="text-lg">
            Write me an email at: email@email.com
            {/* <p> */}
            <span className="flex justify-start gap-5">
              Or reach me via <SocialLinks />
            </span>
            {/* </p> */}
          </div>
          {/* <div className="border-2 border-cyan-300"> */}
          {/* <div className="basis-3/4 border-2 border-green-500"> */}
          {/* <SocialLinks isDark /> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
