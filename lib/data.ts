import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/nft.jpg";
import rmtdevImg from "@/public/ecc.jpg";
import wordanalyticsImg from "@/public/food.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate Agricultural Engineering",
    location: "Abia State, AB",
    institution: "Micheal Okapara University of Agriculture Umudike",
    description:
      "Am an undergraduate at Micheal Okpara University of agriculture.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2025",
  },
  {
    title: "Intern at Ice Network",
    location: "Anambra, AN",
    institution: "ICEHUB",
    description:
      "I interned  as a fullstack developer for 6 month we where thought introduction to web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Introduction to computer science by harvard university CS50 ",
    location: "",
    institution: "CS50",
    description:
      "We where thought introduction to computer science from scratch to python  it was done online ",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Industrial Training",
    location: "Rivers State",
    institution: "SIAT NG",
    description:
      "Introduction into Palm Oil Production, From the Nusery to Harvesting and to the mill for processing",
    icon: React.createElement(FaReact),
    date: "May 2024 - October 2024",
  },
] as const;

export const projectsData = [
  {
    title: "NFT listing website",
    description:
      "This is my first blockchain project ",
    tags: ["React", "Next.js", "Thirdweb", "Tailwind", ""],
    imageUrl: corpcommentImg,
  },
  {
    title: "Supercrib",
    description:
      "This is an eccormerce website built with Nextjs and Golang ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux","Golang"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Online Food Recipy",
    description:
      "A public web app for quick food receipy",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Sanity.io"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "blockchain",
  "Thirdweb",
  "Shadcn",
  "Kinde",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Golang"
] as const;
