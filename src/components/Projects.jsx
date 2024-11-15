import React from "react";

function Projects() {
  return (
    <section>
      <div className="flex flex-col gap-6 justify-center items-center w-full">
        <h1 className="text-4xl font-bold mb-16">PROJECTS</h1>
        <div className="mr-[10vw] ml-[10vw] flex gap-6 flex-wrap justify-center align-middle ">
          <div className="project-card text-2xl font-bold w-[25vw] h-[25vh] border-2 border-white flex justify-center items-center ">
            Project 1
          </div>
          <div className="project-card text-2xl font-bold w-[25vw] h-[25vh] border-2 border-white flex justify-center items-center">
            Project 2
          </div>
          <div className="project-card text-2xl font-bold w-[25vw] h-[25vh] border-2 border-white flex justify-center items-center">
            Project 3
          </div>
          <div className="project-card text-2xl font-bold w-[25vw] h-[25vh] border-2 border-white flex justify-center items-center">
            Project 3
          </div>
          <div className="project-card text-2xl font-bold w-[25vw] h-[25vh] border-2 border-white flex justify-center items-center">
            Project 3
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
