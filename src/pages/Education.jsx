const Education = () => {
  return (
    <section id="education">
      <h2>EDUCATION</h2>
      <div className="card" style={{ "--accent": "#facc15" }}>
        <h3 className="accent-title">
          <strong>🎓 Bachelor of Technology – Computer Science Engineering (AI & ML)</strong>
        </h3>
        <p>📍 Chhattisgarh Swami Vivekanand Technical University, Bhilai, Chhattisgarh</p>
        <p>📌 2021 – 2025 | CGPA: 7.3</p>
      </div>
      <div className="card" style={{ "--accent": "#a78bfa" }}>
        <h3 className="accent-title">
          <strong>🎓 Senior Secondary (Class XII)</strong>
        </h3>
        <p>📍 Sree Narayana Guru Vidya Bhavan, Bhilai, Chhattisgarh</p>
        <p>📌 2021 | Percentage: 92%</p>
      </div>
    </section>
  );
};

export default Education;
