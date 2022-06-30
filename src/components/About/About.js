import React from "react";
import headerImage from "../../img/Airplane2.jpeg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="container home">
      <header className="content-section">
        <img src={headerImage} alt="" />
        <h2 className="fun-bus-img">About Us</h2>
        <p>
          We are KidsFlyy, a company that focuses on assisting parents and
          guardians as they travel across this great nation and world. Our
          company was founded in 2014 by a husband who watched his wife
          struggling with the kids and luggage as they travled on their
          "vacations."
        </p>
        <p>
          Mr. Allen wanted to find a way to help his wife relax before they ever
          even got on the plane. And KidsFlyy was born!
        </p>
        <h2>What we do</h2>
        <p>
          KidsFlyy is a program to help people enjoy their vacations as soon as
          they leave the house. Through this wonderful app you can request help
          from the airport with luggage and transportation to your gate.
        </p>
      </header>
      <Footer />
    </div>
  );
};

export default About;
