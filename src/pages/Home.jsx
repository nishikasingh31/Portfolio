const techStack = [
  { name: "React", icon: "⚛️", color: "#38bdf8" },
  { name: "Node.js", icon: "🟢", color: "#34d399" },
  { name: "MongoDB", icon: "🍃", color: "#facc15" },
  { name: "Python", icon: "🐍", color: "#a78bfa" },
];

const Home = () => {
  return (
    <section id="home" className="hero">
      <h1>
        Hi, I'm <span>Nishika Singh</span>
      </h1>
      <h3>
        <strong>Full Stack Developer | AI/ML Enthusiast</strong>
      </h3>

      <div className="hex-grid">
        {techStack.map((tech, i) => (
          <div className="hexagon" key={i} style={{ "--accent": tech.color }}>
            <span className="hex-icon">{tech.icon}</span>
            <span className="hex-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
