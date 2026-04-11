import './Hability.css';

const skills = [
    { label: 'HTML', value: 80 },
    { label: 'CSS', value: 80 },
    { label: 'JavaScript', value: 70 },
    { label: 'React', value: 75 },
];

function Hability() {
    return (
        <section id="habilidades" className="py-5 section-surface">
            <div className="container">
                <h2 className="text-center display-5 fw-bold mb-5">Mis Habilidades</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card border-0 shadow p-4 rounded-4">
                            <div className="card-body">
                                {skills.map((skill) => (
                                    <div key={skill.label} className="skill mb-4">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="skill-label">{skill.label}</span>
                                            <span className="skill-badge">{skill.value}%</span>
                                        </div>
                                        <div className="progress-track mb-3" aria-label={`${skill.label} progreso`} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-fill" style={{ width: `${skill.value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hability;
