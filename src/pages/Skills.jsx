const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    color: "#38bdf8",
    skills: ["JavaScript (ES6+)", "Python"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "#34d399",
    skills: [
      "HTML, CSS",
      "React.js",
      "Node.js & Express.js",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Machine Learning",
    icon: "🤖",
    color: "#facc15",
    skills: [
      "Scikit-learn",
      "TensorFlow / Keras",
      "NLP (NLTK, spaCy, Transformers)",
      "AI/LLM Integration",
    ],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    color: "#a78bfa",
    skills: ["VS Code", "Git & GitHub", "Postman", "Vercel / Render"],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="container">
        {skillCategories.map((cat, index) => (
          <div className="card" <strong key={index}> </strong> style={{ "--accent": cat.color }}>
            <div className="skill-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
