import React from "react";

function Main() {
  return (
    <main className="flex justify-center items-center select-none h-screen w-screen">
      <section
        className="flex flex-col gap-6 justify-center items-center w-full"
        id="home"
      >
        <h1 className="text-white text-[3rem] leading-[3.5rem]  font-bold">
          Hello, I'm{" "}
          <span className="hover:shadow-emerald-100 duration-150">Huzaifa</span>
        </h1>
        <h3 className="text-4xl font-bold">
          A passionated coder from{" "}
          <span className="text-white hover:text-green-500 duration-150">
            Pakistan
          </span>
        </h3>

        <p className="text-xl">
          🔭 I’m currently working on{" "}
          <span className="text-white hover:text-blue-500 duration-150">
            Typescript
          </span>
          ,{" "}
          <span className="text-white hover:text-yellow-500 duration-150">
            JS
          </span>{" "}
          and{" "}
          <span className="text-white hover:text-purple-500 duration-150">
            Python
          </span>
          !
        </p>
        <p className="text-xl">
          🌱 I’m currently learning AI, Web 3.0, Metaverse at Governor House
        </p>
        <p className="text-xl">
          📫 How to reach me :&nbsp;
          <a
            className="text-white select-none"
            href="mailto:huzaifazaki92@gmail.com"
          >
            huzaifazaki92@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}

export default Main;
