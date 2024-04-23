import React from "react";
import Header from "../components/header/Header";

import { projects } from "./../helpers/projectsList";

import Project from "../components/project/Project";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project key={index} title={project.title} img={project.img} index={index} />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
