import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>ABOUT</h2>
      <div className="card">
        <p>
          I'm Nishika Singh, a Computer Science (AI/ML) graduate from Rungta
          College of Engineering and Technology, Bhilai, with a strong
          interest in full-stack web development and applying AI/ML to
          real-world problems. Based in Pune, Maharashtra, India.
        </p>
        <p>
          I've built and deployed multiple full-stack MERN applications —
          from a real-time online quiz platform to an AI-powered interview
          preparation tool that generates role-specific questions, streams
          responses in real time, and provides instant feedback using an
          LLM. I enjoy working across the entire stack, from designing
          RESTful APIs and structuring MongoDB schemas to building
          responsive, user-friendly interfaces with React.js.
        </p>
        <p>
          Alongside web development, I've also worked on machine learning
          and NLP projects, including a 7-layer CNN for handwritten digit
          classification (achieving over 98% accuracy on the MNIST dataset)
          and a multilingual language translation system built using NLP
          libraries like spaCy, Hugging Face Transformers, and NLTK.
        </p>
        <p>
          <strong>Technical skills:</strong> JavaScript (ES6+), Python,
          React.js, Node.js, Express.js, MongoDB, SQL, RESTful API design,
          JWT authentication, and Git/GitHub for version control.
        </p>
        <p>
          I hold certifications in Azure Fundamentals (Microsoft),
          Generative AI (Google Cloud), and completed specialized training
          programs in Node.js backend development and MERN stack
          development.
        </p>
        <p>
          I'm currently seeking an entry-level opportunity as a full-stack
          developer, where I can contribute to meaningful, scalable
          products, collaborate with experienced teams, and continue
          growing as an engineer. I'm open to opportunities in{" "}
          <strong>Pune, Hyderabad, and Bengaluru</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
