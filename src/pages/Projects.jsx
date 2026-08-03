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
            <li>Built an ML-based model for detecting and translating multiple languages accurately.</li>
            <li>Applied NLP techniques for text preprocessing, classification, and language identification.</li>
            <li>Trained and evaluated the model on a real-world Twitter dataset.</li>
            
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
             <li>Built a CNN model for recognizing handwritten digits(0–9) from image data.</li>
             <li>Used TensorFlow and Keras for training and image classification tasks.</li>
             <li>Trained and evaluated the model on the MNIST digit dataset.</li>
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
            <li>Built a full-stack MERN Quiz platform that allows users to attempt quizzes.</li>
            <li>Implemented real-time score calculation and instant result display features.</li>
            <li>Supported multiple quiz categories with dynamic question and answer handling.</li>
            
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
            <li>Built a full-stack app that generates interview questions using an LLM.</li>
            <li>Implemented real-time streaming of AI responses for a smoother experience.</li>
            <li>Added JWT authentication with AI-based feedback and scoring features.</li>
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
