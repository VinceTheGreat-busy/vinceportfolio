import { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import Loading from "../components/Loading";
import '../assets/css/project.css';

function Projects() {
    const [proj, setProj] = useState(null);
    const [error, setError] = useState(null);

    const fetchProj = async () => {
        try {
            const res = await fetch(`${import.meta.env.BASE_URL}data/about.json`);
            const data = await res.json();
            setProj(data);
        } catch (e) {
            setError("Failed to fetch data " + e);
            console.error(e);
        }
    };

    useEffect(() => {
        fetchProj();
    }, []);

    if (error) return <p>{error}</p>;
    if (!proj) return <Loading />;

    return (
        <main>
            <div className="main">
                <h1>Personal Projects:</h1>

                <div className="projects">
                    {proj.projects.map((category, cIndex) => (
                        <div key={cIndex} className="project-category">
                            <h2>{category.category}</h2>

                            {category.items.map((item, iIndex) => (
                                <div key={iIndex} className="project-card">

                                    <ImageCarousel images={item.images} name={item.name} />

                                    <div className="info-card">
                                        <h3>{item.name}</h3>

                                        <p>
                                            <strong>Role:</strong> {item.role}
                                        </p>

                                        <p>
                                            <strong>Technologies:</strong>{" "}
                                            {item.technologies.join(", ")}
                                        </p>

                                        <ul>
                                            {item.highlights.map((h, idx) => (
                                                <li key={idx}>{h}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Projects;