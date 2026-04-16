import './Hability.css';

const skills = [
  { label: 'HTML5', value: 80 },
  { label: 'CSS3', value: 80 },
  { label: 'JavaScript', value: 70 },
  { label: 'React', value: 75 },
];

function Hability() {
  return (
    <section id="habilidades" className="skills-section">

      <div className="container">

        {/* 👇 TITULO */}
        <div className="text-center mb-5">
          <h2 className="skills-title">Habilidades</h2>
          <p className="skills-subtitle">
            Tecnologías y herramientas con las que construyo soluciones modernas
          </p>
        </div>

        {/* 👇 GRID */}
        <div className="skills-container">

          {skills.map((skill) => (
            <div key={skill.label} className="skill-card">

              <div className="skill-header">
                <span className="skill-name">{skill.label}</span>
                <span className="skill-value">{skill.value}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.value}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hability;