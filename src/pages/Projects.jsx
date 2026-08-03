const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>

      <div className="project-container">

        {/* LANGUAGE PROJECT */}
        <div className="card project-card"
        onClick={() => window.open("https://nishikasingh31-multilingual-language-detection-and-translation.streamlit.app/", "_blank")}>
          <h3> <strong>Multilingual Language Detection & Translation </strong></h3>

          <p><strong>Tech Stack:</strong> Python, NLP, Scikit-learn</p>
    
          <ul>
            <li>Built an ML-based model for language detection and translation.</li>
            <li>Applied NLP techniques for accurate text classification.</li>
            <li>Trained and evaluated on a real-world Twitter dataset.</li>
            
          </ul>

          <a
            href="https://github.com/nishikasingh31/Multilingual-Language-Detection-and-Translation-System"
            target="_blank"
            className="github-bottom"
            onClick={(e) => e.stopPropagation()}>
           🔗 View Code
          </a>
        </div>

        {/* CNN PROJECT */}
        <div className="card project-card"
        onClick={() => window.open("https://nishikasingh31-handwritten-digit-classification-using-cnn.streamlit.app/", "_blank")}>
          <h3> <strong>Handwritten Digit Recognition (CNN)</strong></h3>

          <p><strong>Tech Stack:</strong> Python, TensorFlow, Keras</p>

          <ul>
             <li>Built a CNN model to recognize handwritten digits(0–9).</li>
             <li>Used TensorFlow and Keras for image classification.</li>
             <li>Trained and evaluated on a digit dataset.</li>
          </ul>

          <a
            href="https://github.com/nishikasingh31/Handwritten-Digit-Classification-using-CNN"
            target="_blank"
            className="github-bottom"
            onClick={(e) => e.stopPropagation()}>
           🔗 View Code
          </a>

        </div>

        <div className="card project-card"
            onClick={() => window.open("https://nishika-singh-quiz-application.vercel.app/", "_blank")}>
          <h3> <strong>Online Quiz Application </strong></h3>

          <p><strong>Tech Stack:</strong> React, Node.js, MongoDB</p>

          <ul>
            <li>Built a full-stack quiz platform that allows users to attempt quizzes.</li>
            <li>Real-time score calculation and result display.</li>
            <li>Supported multiple quiz categories.</li>
            
          </ul>

          <a
            href="https://github.com/nishikasingh31/Quiz-Application"
            target="_blank"
            className="github-bottom"
            onClick={(e) => e.stopPropagation()}>
           🔗 View Code
          </a>
          
        </div>

        {/* Interview prep AI*/}
        <div className="card project-card"
        onClick={() => window.open("https://interview-prep-ai-nishika-singh.vercel.app/", "_blank")}>
          <h3> <strong>Interview Prep AI</strong></h3>
    
          <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, LLM (Groq API)</p>
          <ul>
            <li>Built a full-stack app that generates role-specific interview questions using an LLM.</li>
            <li>Implemented real-time streaming of AI responses for a faster experience.</li>
            <li>Added JWT-based authentication and dual-mode answer practice with AI feedback.</li>
          </ul>

          <a
            href="https://github.com/nishikasingh31/Interview-Prep-AI"
            target="_blank"
            className="github-bottom"
            onClick={(e) => e.stopPropagation()}>
           🔗 View Code
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;
