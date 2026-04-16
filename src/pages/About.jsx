import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 >ABOUT</h2>

       <div className="container"/>

      <div className="card">
        <h3>
          Hi, I’m Nishika Singh, a Computer Science graduate from CSVTU, Bhilai, currently living in Pune.
        </h3>
        <h3>
          A Computer Science graduate from CSVTU, Bhilai, 
          currently residing in Pune — and someone who genuinely enjoys turning ideas into real,
          working products.
        </h3>

        <h3>
          During college, I explored machine learning through projects like a{" "}
          <strong>Multilingual Language Detection System</strong> and a{" "}
          <strong>Handwritten Digit Classifier using CNN</strong>. These
          experiences helped me understand how intelligent systems work behind
          the scenes.
        </h3>

        <h3>
          Right now, I’m more focused on <strong>Web Development</strong>, 
          especially building clean and user-friendly applications using the 
          <strong>MERN stack</strong>. Recently, I’ve worked on projects like an
          <strong> E-commerce Platform</strong> and an <strong>Online Quiz Application</strong>, 
          focusing on both functionality and user experience using React and Node.js.
        </h3>

        <h3>
          I enjoy learning by building things—whether it’s fixing bugs, improving UI, or 
          trying new features until everything works smoothly.
        </h3>

        <h3>
          I’m currently looking for <strong>internship or full-time
          opportunities</strong> where I can learn, grow as a developer, and 
          contribute to real-world projects. I’m open to opportunities in 
           <strong> Pune, Hyderabad, and Bengaluru</strong>.
        </h3>
      </div>
    </section>
  );
};

export default About;
