
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Hability.css';

function Hability() {
    const [html, setHtml] = useState(75);
    const [css, setCss] = useState(70);
    const [js, setJs] = useState(50);

    return (
        <section id="habilidades" className="py-5 bg-light-custom">
            <div className="container">
                <h2 className="text-center display-5 fw-bold mb-5">Mis Habilidades</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <label className="fw-bold">HTML:</label>
                                        <span className="badge bg-primary">{html}%</span>
                                    </div>
                                    <ProgressBar now={html} variant="primary" className="mb-3" />
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <label className="fw-bold">CSS:</label>
                                        <span className="badge bg-success">{css}%</span>
                                    </div>
                                    <ProgressBar now={css} variant="success" className="mb-3" />
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <label className="fw-bold">JavaScript:</label>
                                        <span className="badge bg-warning text-dark">{js}%</span>
                                    </div>
                                    <ProgressBar now={js} variant="warning" className="mb-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hability;