const Skills = () => {
  return (
    <section id="skills">
      <h2>SKILLS</h2>

      <div className="container">

        <div className="card">
          <h3> <strong>Programming Languages</strong></h3>
          <ul>  
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>

          <div className="card">
          <h3> <strong>Web Development </strong></h3>
          <ul>  
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="card">
          <h3> <strong>Machine Learning</strong></h3>
          <ul>
            <li>Scikit-learn</li>
            <li>TensorFlow / Keras</li>
            <li>Model Training & Evaluation</li>
          </ul>
        </div>

        <div className="card">
          <h3> <strong>Development Tools </strong></h3>
          <ul>
            <li>VS Code</li>
            <li>Git & GitHub</li>
            <li>Postman (API Testing)</li>
            <li>Vercel / Render (Deployment)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;