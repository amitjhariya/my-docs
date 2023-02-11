import React from "react";
import HeroImgage from '../../assets/hero.svg'

function Home() {

  return (
    <>
      <div className="hero">
        <div className="col-2">
          <h1 className="heading">Introducing Personal Docs</h1>
          <p>
            Are you tired of losing important files or having them scattered
            across multiple devices? With Personal Docs, you can store all your
            important documents in one secure and convenient place. Our platform
            allows you to upload, organize, and access your files from anywhere,
            at any time.
          </p>
          <button className="cta" > Get Started </button>
        </div>
        <div className="col-2">
          <img className="" src={HeroImgage} alt={"hero"}/>
        </div>
      </div>
    </>
  );
}

export default Home;
