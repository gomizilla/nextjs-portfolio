import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section className="pt-3 pb-10" id="about-me">
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
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-4 sm:h-[450px] my-3 bg-yellow-300">
        <div className="col-span-2 row-span-4 bg-wh-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          impedit sequi ad ex pariatur sapiente magni vitae architecto. Sint
          perspiciatis ipsa dolores repellat inventore non sapiente quia.
          Aperiam, consectetur incidunt? Quam saepe consequuntur voluptas
          deleniti aut voluptates maiores quasi, minus assumenda et asperiores,
          autem veniam illum nesciunt praesentium velit eius, maxime veritatis
          tenetur. Neque saepe praesentium, eos libero vitae, debitis molestias
          reiciendis deleniti mollitia asperiores velit commodi, pariatur
          possimus. Numquam quis et quod. Porro libero deleniti omnis accusamus
          enim magni nostrum rerum iusto ea commodi, nam modi error ex quas
          harum impedit ullam odit rem! Doloribus sint sequi tempore maxime?
        </div>
        <div className="flex items-center justify-center col-span-2 row-span-1 bg-wh-500">
          <div className="font-bold text-3xl md:text-5xl xs:py-2">
            <h1>Skills</h1>
          </div>
        </div>
        <div className="col-span-2 row-span-3 bg-wh-100">
          <div className="grid grid-cols-3 grid-rows-4 bg-red-300 h-full gap-2">
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
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
            <div className="col-span-1 row-span-1 bg-green-700">img</div>
          </div>
        </div>
        {/* <div className="col-span-1 row-span-1 bg-wh-500"></div> */}
      </div>
    </section>
  );
};

export default AboutMe;
