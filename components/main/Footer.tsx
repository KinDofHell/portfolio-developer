import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaYoutube, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="z-[100] min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Find Me</div>
            <a
              href="https://www.linkedin.com/in/ihor-dzhus-0981b7283/"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <a
              href="https://github.com/KinDofHell"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTelegram />
              <span className="text-[15px] ml-[6px]">@Kind_of_Hell</span>
            </p>
          </div>
          <div className="z-[100] min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <a
              href="https://www.linkedin.com/in/ihor-dzhus-0981b7283/"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>
            <a
              href="mailto:ihordzhus24@gmail.com"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                ihordzhus24@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy;IhorDzhus 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
