import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../(shared)/Card";

// type TrendingCardProps = {
//   className?: string;
//   // post: Post;
// };

// const TrendingCard = ({ className }: TrendingCardProps) => {
//   return (
//     <Link
//       className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
//       // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
//       href="/"
//     >
//       <div className="z-0 relative w-full h-full">
//         {/* need to have parent div with relative/w-full/h-full when using fill in Image component
//           for it to be responsive */}
//         <Image
//           fill
//           alt="tech"
//           //   placeholder="blur"
//           //   src={post?.image}
//           src="/"
//           sizes="(max-width: 480px) 100vw,
//                   (max-width: 768px) 75vw,
//                   (max-width: 1060px) 50vw,
//                   33vw"
//           style={{ objectFit: "cover" }}
//         />
//       </div>
//       <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
//       <div className="absolute z-2 bottom-0 left-0 p-3">
//         <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
//           {/* {post?.category} */}
//         </h4>
//         <div className="text-wh-100 mt-2">{/* {post?.title} */}</div>
//       </div>
//     </Link>
//   );
// };

type ProjectCardProps = {};

const ProjectCard = ({}: ProjectCardProps) => {};

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h1 className="font-bold text-3xl md:text-5xl">Projects</h1>
      </div>
      {/* <div className="sm:grid gap-5 grid-cols-4 grid-rows-4 sm:h-[450px] my-3 bg-yellow-300">
        <TrendingCard className="col-span-2 row-span-4 bg-wh-100"></TrendingCard>
        <TrendingCard className="col-span-2 row-span-1 bg-wh-100"></TrendingCard>
        <TrendingCard className="col-span-2 row-span-3 bg-wh-100"></TrendingCard>
      </div> */}

      {/* <div className="flex justify-between items-center bg-wh-900">
        <div className="bottom-0 left-0 p-3">
          <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
            Tango Atsumare
          </h4>
          <div className="text-wh-100 mt-2">React Native/Typescript</div>
        </div>
      </div> */}

      {/* flex */}
      {/* <div className="flex justify-between items-center gap-5">
        <div className="bg-wh-500 h-96 basis-1/2"></div>
        <div className="flex flex-col gap-3 h-96 basis-1/2">
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8 my-5 border-2 border-orange-400"> */}
      {/* <div className="flex flex-col gap-y-8 my-5 border-2 border-orange-800"> */}
      <div className="sm:grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8 my-5 border-2 border-red-700">
        {/* large card */}
        <Card
          className="bg-wh-500 col-span-1 row-span-3"
          imageHeight="h-56"
          isLongForm={true}
        ></Card>
        <Card
          className="bg-wh-500 col-span-1 row-span-3 mt-10 sm:mt-0"
          imageHeight="h-56"
          isLongForm={true}
        ></Card>
        <Card
          className="bg-wh-500 col-span-1 row-span-3 mt-10 sm:mt-0"
          imageHeight="h-56"
          isLongForm={true}
        ></Card>
        <Card
          className="bg-wh-500 col-span-1 row-span-3 mt-10 sm:mt-0"
          imageHeight="h-56"
          isLongForm={true}
        ></Card>
        {/* <div className="bg-wh-500 col-span-2 row-span-1">asdf</div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Projects;