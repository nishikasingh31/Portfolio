const projectData = [
  {
    title: "Multilingual Language Detection & Translation",
    color: "#38bdf8",
    link: "https://nishikasingh31-multilingual-language-detection-and-translation.streamlit.app/",
    github: "https://github.com/nishikasingh31/Multilingual-Language-Detection-and-Translation-System",
    stack: "Python, NLP, Scikit-learn",
    points: [
      "Built an ML-based model for detecting and translating languages accurately.",
      "Applied NLP techniques for text preprocessing, classification, and language identification.",
      "Trained and evaluated the model on Twitter dataset.",
    ],
  },
  {
    title: "Handwritten Digit Classification using CNN",
    color: "#34d399",
    link: "https://nishikasingh31-handwritten-digit-classification-using-cnn.streamlit.app/",
    github: "https://github.com/nishikasingh31/Handwritten-Digit-Classification-using-CNN",
    stack: "Python, TensorFlow, Keras",
    points: [
      "Built a CNN model for recognizing handwritten digits (0–9) from image data.",
      "Used TensorFlow and Keras to train, and evaluate the image classification model.",
      "Trained and evaluated the model on the MNIST digit dataset, achieving high test accuracy.",
    ],
  },
  {
    title: "Online Quiz Application",
    color: "#facc15",
    link: "https://nishika-singh-quiz-application.vercel.app/",
    github: "https://github.com/nishikasingh31/Quiz-Application",
    stack: "React, Node.js, Express, MongoDB",
    points: [
      "Built a full-stack MERN Quiz platform that allows users to attempt quizzes online.",
      "Implemented real-time score calculation and instant result display for a smooth user experience.",
      "Supported multiple quiz categories with dynamic question and answer handling.",
    ],
  },
  {
    title: "Interview Prep AI",
    color: "#a78bfa",
    link: "https://interview-prep-ai-nishika-singh.vercel.app/",
    github: "https://github.com/nishikasingh31/Interview-Prep-AI",
    stack: "React, Node.js, Express, MongoDB, LLM (Groq API)",
    points: [
      "Built a full-stack app that generates role-specific interview questions using an LLM.",
      "Implemented real-time streaming of AI responses for a smoother experience.",
      "Added JWT authentication with AI-based feedback and scoring features.",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="project-container">
        {projectData.map((proj, i) => (
          <div
            className="card project-card"
            key={i}
            style={{ "--accent": proj.color }}
            onClick={() => window.open(proj.link, "_blank")}
          />
            <h3><strong>{proj.title}</strong></h3>
            <p><strong>Tech Stack:</strong> {proj.stack}</p>
            <ul>
              {proj.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
            
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-bottom"
              onClick={(e) => e.stopPropagation()}
            />
              🔗 View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
