import React from "react";
import Image from "next/image";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";
import LinkedIn from "/public/assets/social_linkedin.png";
import Github from "/public/assets/social_github.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a
        href="https://www.linkedin.com/in/dean-walton/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="LinkedIn"
          src={LinkedIn}
          width={25}
          height={25}
        />
      </a>
      <a href="https://github.com/gomizilla" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Github"
          src={Github}
          width={25}
          height={25}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
