import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  title?: string;
  image?: string;
  description?: string;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
  title,
  image,
  description,
}: Props) => {
  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
      </Link>
      <div className="basis-full">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
        `}
          >
            {title}
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs"></h5> {/* 1:43 ish */}
        </div>
        <p
          className={`text-wh-50 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
