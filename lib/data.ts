import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/nft.jpg";
import rmtdevImg from "../public/ecc.jpg";
import wordanalyticsImg from "../public/food.png";
import chatbot from "../public/chatbot.png";
import sebi from "../public/sebi222.png";
import raggedai from "../public/ragged.png";
import tobfolio from "../public/tobfolio.png";
import aitrading from "../public/aitrading.png";
import icehub from "../public/icehubb.png";
import urlshort from "../public/URLSHORT.png";
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
    title: "B.ENG Agricultural and Bioresources Engineering",
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
    githubLink: "https://github.com/rodeok/nft-drop-site",
    liveLink: "https://nft-drop21.vercel.app",
  },
  {
    title: "Supercrib",
    description:
      "This is an eccormerce website built with Nextjs and Golang ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Golang"],
    imageUrl: rmtdevImg,
    githubLink: "https://github.com/rodeok/supercrib-eccormerce-sanity",
    liveLink: "https://supercrib.vercel.app",
  },
  {
    title: "Online Food Recipy",
    description:
      "A public web app for quick food receipy",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Sanity.io"],
    imageUrl: wordanalyticsImg,
    githubLink: "https://github.com/rodeok/recipy-app-react",
    liveLink: "https://next-recipe-app-main.vercel.app/",
  },
  {
    title: "AI CHATBOT",
    description:
      "AI CHATBOT built with python,pytorch,flask",
    tags: ["Python", "flask", "pytorch", "", ""],
    imageUrl: chatbot,
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Online pharmacy",
    description:
      "online pharmacy web app for quick local remedies",
    tags: ["React", "Next.js", "gemini", "Tailwind", ""],
    imageUrl: sebi,
    githubLink: "https://github.com",
    liveLink: "https://google.com",
  },
  {
    title: "Ai powerpoint generator",
    description:
      "AI powered powerpoint generator",
    tags: ["React", "Next.js", "gemini", "Tailwind", ""],
    imageUrl: wordanalyticsImg,
    githubLink: "https://github.com",
    liveLink: "https://google.com",
  },
  {
    title: "Raggedai",
    description:
      "RAG platform built with Nextjs and xenova/transformers,Mongodb",
    tags: ["React", "Next.js", "groq", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: raggedai,
    githubLink: "",
    liveLink: "https://raggedai.vercel.app",
  },
  {
    title: "Tobfolio",
    description:
      "Property Management System built with Nextjs,nodejs",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: tobfolio,
    githubLink: "",
    liveLink: "tobfolio.com",
  },
  {
    title: "Traders Companion",
    description:
      "Forex trading analysis tool built with Nextjs,nodejs",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: aitrading,
    githubLink: "",
    liveLink: "https://aitrader6.vercel.app",
  },
  {
    title: "Icehub",
    description:
      "Portfolio/Management system built for ICEHUB",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: icehub,
    githubLink: "",
    liveLink: "https://icehub-ng.com",
  },
  {
    title: "Urlshortener",
    description:
      "Urlshortener built with Nextjs,nodejs",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: urlshort,
    githubLink: "",
    liveLink: "https://urlshortner-omega-pink.vercel.app/",
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
