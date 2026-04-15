import { useState, useEffect } from 'react';
import '../assets/css/about.css';

function About() {
    const [about, setAbout] = useState(null);
    const [error, setError] = useState(null);

    const fetchAbout = async () => {
        try {
            const res = await fetch(`${import.meta.env.BASE_URL}data/about.json`);
            const data = await res.json();
            setAbout(data);
        } catch (e) {
            setError("Failed to fetch data" + e);
            console.error(e);
        }
    };

    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    useEffect(() => {
        fetchAbout();
    }, []);

    if (error) return <p>{error}</p>;
    if (!about) return <p>Loading tech stack...</p>;

    return (
        <main>
            <section className="heading">
                <h2>Hello! I'm Vince, a graduate of Senior High School from Sacred Heart of Jesus Catholic School. </h2>
            </section>

            <section className="description">
                <h2>Educational Attainment:</h2>
                <div className="educAttainment">
                    <div className="educ-card">
                        <h3>Senior High School Graduate</h3>
                        <p>Sacred Heart of Jesus Catholic School</p>
                        <p>Information Communication Technology (ICT - TVL)</p>
                        <p>2024 - 2026</p>
                    </div>
                    <div className="educ-card">
                        <h3>Junior High School Graduate</h3>
                        <p>Antonio A. Maceda Integrated School</p>
                        <p>2020 - 2024</p>
                    </div>
                </div>
            </section>

            <section className="tech-stack">
                <h2>Technology Stack:</h2>
                <div id="tech-container">
                    {Object.entries(about).map(([category, items]) => (
                        <div key={category} className={category}>
                            <h3>{category.toUpperCase()}</h3>
                            <div className="stack-grid">
                                {items.map((item, index) => (
                                    <div key={index} className="stack-card">
                                        <img src={item.img} alt={item.name} />
                                        <p>{item.name}</p>
                                        <div className="stars">{renderStars(item.rating)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default About;