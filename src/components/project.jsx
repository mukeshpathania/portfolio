import React, { useState } from "react";
import "./Project.css";

import Image from "../image/scm.jpg";
import Yt from "../image/yt.webp";
import Sentiment from "../image/sentiment.webp";
import RPG from "../image/rpg.jpg"
import IMG from "../image/imgtopdf.png"
import EDA from "../image/eda.jpg"
import SMP from "../image/smp.webp"
import RAG from "../image/RAG.png"
import LLM from "../image/llm.png"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Project() {

  const [index, setIndex] = useState(0);

  const projects = [
      {
      image: RAG,
      title: "PDF Chat Bot Using RAG",
      date: "May 2026 - Jun 2026",
      desc:
        "Developed an AI-powered PDF Chat Bot using Retrieval-Augmented Generation (RAG) that allows users to upload PDF documents and ask questions in natural language. Integrated LangChain, FAISS, and Google Gemini to perform document retrieval, semantic search, and context-aware answer generation for accurate responses.",
      tags: [
        "Python",
        "LangChain",
        "Google Gemini",
        "FAISS",
        "RAG",
        "LLM",
        "Vector Search",
        "NLP",
        "Document QA",
        "Generative AI",
      ],
      github:
        "https://github.com/mukeshpathania/PDF-Chat-Bot-Using-RAG",
      live:
        "https://huggingface.co/spaces/Mukesh1903/RAG_Model",
    },
    {
  image: LLM, // add your image import
  title: "Fullstack LLM Chatbot",
  date: "Apr 2026 - May 2026",
  desc:
    "Built a full-stack AI chatbot application using Retrieval-Augmented Generation (RAG) and Large Language Models. The system enables users to interact with documents and receive context-aware responses by integrating vector embeddings, semantic search, and LLM-based generation. Implemented backend APIs, frontend UI, and document processing pipeline for seamless chat experience.",
  tags: [
    "Python",
    "FastAPI",
    "React",
    "LangChain",
    "RAG",
    "LLM",
    "Vector Database",
    "Embeddings",
    "NLP",
    "Full Stack AI",
  ],
  github: "https://github.com/mukeshpathania/fullstack-llm-chatbot",
  // live: "add-if-deployed"
},
    {
      image: SMP,
      title: "Student Marks Predictor",
      date: "Apr 2026 - May 2026",
      desc:
        "Built a Student Marks Predictor using Machine Learning and Python to predict student scores based on study-related factors. Implemented data preprocessing, regression modeling, and performance evaluation using Scikit-learn, Pandas, and Matplotlib to analyze and visualize prediction accuracy.",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Joblib",
        "Machine Learning",
        "Linear Regression",
        "Data Preprocessing",
        "Model Evaluation",
      ],
      github:
        "https://github.com/mukeshpathania/Student-marks-predictor",
    },
    {
      image: EDA,
      title: "Exploratory Data Analysis (EDA)",
      date: "Apr 2026 - Apr 2026",
      desc:
        "Performed exploratory data analysis (EDA) on the Titanic dataset using Python to uncover patterns and insights related to passenger survival. The project includes data cleaning, handling missing values, statistical analysis, and data visualization to identify relationships between factors such as age, gender, passenger class, and survival rates.",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Cleaning & Preprocessing",
        "Data Visualization",
      ],
      github:
        "https://github.com/mukeshpathania/Data-Analysis-Project-Titanic-Dataset-Python",
    },
     {
      image: IMG,
      title: "Images to PDF Converter",
      date: "Apr 2026 - Apr 2026",
      desc:
        "Built an Images to PDF Converter application using Python that enables users to combine multiple images into a single PDF document. Implemented an interactive GUI with efficient file handling and PDF generation features for smooth and fast document conversion",
      tags: [
        "Python",
        "Pillow(PIL)",
        "OS module",
      ],
      github:
        "https://github.com/mukeshpathania/Images-to-pdf-Converter",
    },
    {
      image: RPG,
      title: "Random Password Generator",
      date: "Mar 2026 - Mar 2026",
      desc:
        "Developed a Random Password Generator using Python that creates secure passwords containing letters, numbers, and special characters. This project automatically generates a 12-character strong password using random selection.",
      tags: [
        "Python",
        "NumPy",
        "String Module",
      ],
      github:
        "https://github.com/mukeshpathania/Random_Password_Generator",
    },
    {
      image: Sentiment,
      title: "Trading Sentiment Analysis",
      date: "Feb 2026 - Mar 2026",
      desc:
        "Developed an AI-powered Trading Sentiment Analysis system using Python and Machine Learning techniques to analyze financial news and market sentiment.",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "NLP",
        "Matplotlib",
        "Streamlit",
      ],
      github:
        "https://github.com/mukeshpathania/trading-sentiment-analysis",
    },

    {
      image: Image,
      title: "Supply Chain Management System",
      date: "Sep 2024 – Mar 2025",
      desc:
        "Developed a Supply Chain Management system to streamline inventory, order processing, and logistics operations efficiently.",
      tags: [
        "React",
        "Solidity",
        "TailwindCSS",
        "Hardhat",
        "Ethers.js",
      ],
      github:
        "https://github.com/mukeshpathania/Supply-Chain-Management-system",
    },

    {
      image: Yt,
      title: "Youtube Clone",
      date: "Apr 2025 - May 2025",
      desc:
        "Developed a YouTube clone web application with responsive UI and dynamic video rendering.",
      tags: [
        "React.js",
        "JavaScript",
        "CSS",
        "Material UI",
        "Firebase",
      ],
      github:
        "https://github.com/mukeshpathania/youtube-clone",
    },
  ];

  const nextSlide = () => {
  if (index < projects.length - 1) {   // now goes up to index 1 → shows cards 2+3
    setIndex(index + 1);
  }
};

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="project-section">

      <h2 className="heading">My Projects</h2>

      <div className="para">
        <p>
          A selection of projects demonstrating my development and AI/ML skills
        </p>
      </div>

      {/* Arrows */}

      <button className="arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Slider */}

      <div className="slider-container">

      <div
  className="slider"
  style={{
    transform: `translateX(calc(${index} * (-50% - 10px)))`,
  }}
>
          {projects.map((project, i) => (

            <div className="project-card" key={i}>

              <img src={project.image} alt={project.title} />

              <h4>{project.title}</h4>

              <p>{project.date}</p>

              <p>{project.desc}</p>

              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>

              <div className="actions">

                  <a
                    href={project.github}
                    className="btn outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;