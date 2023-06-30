import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 p-10">
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
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Linkage</h4>
          <p className="my-5">Path of Exile 2.0 when</p>
          <p className="my-5">GGG Pls</p>
          <p>gib</p>
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Ejecto Seato Cuz</h4>
          <p className="my-5">contact bracket?</p>
          <p>halp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
