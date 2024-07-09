"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    num: "01",
    category: "fullstack",
    description: "",
    stack: [{name: "MERN"}, {name: "Prisma ORM"}, {name: "ChakraUI"}],
    image: "/",
    github: "https://github.com/vhsxuz/statements-against-mankind"
  },
  {
    num: "02",
    category: "database",
    description: "",
    stack: [{name: "MSSQL"}],
    image: "/",
    github: "https://github.com/vhsxuz/database-lab-project"
  },
  {
    num: "03",
    category: "fullstack",
    description: "",
    stack: [{name: "PHP"}, {name: "Laravel"}, {name: "Bootstrap"}],
    image: "/",
    github: "https://github.com/vhsxuz/maiboutique"
  },
  {
    num: "04",
    category: "backend",
    description: "",
    stack: [{name: "NodeJS"}, {name: "Express"}, {name: "Typescript"}, {name: "Prisma ORM"}],
    image: "/",
    github: "https://github.com/vhsxuz/backend-api-project"
  },
  {
    num: "04",
    category: "iOS Application",
    description: "Create a replica of widgets feature from Blibli iOS mobile application.",
    stack: [{name: "Swift"}, {name: "UIKit"}],
    image: "/",
    github: "https://github.com/vhsxuz/blibli-widgets"
  },
  {
    num: "05",
    category: "fullstack",
    description: "",
    stack: [{name: "MERN"}, {name: "React"}],
    image: "/",
    github: "https://github.com/vhsxuz/quanc-client"
  },
  {
    num: "06",
    category: "fullstack",
    description: "",
    stack: [{name: "MERN"}, {name: "JWT Token"}],
    image: "/",
    github: "https://github.com/vhsxuz/blp-test"
  },
]

const Work = () => {
  return (
    <div>Work</div>
  )
}

export default Work