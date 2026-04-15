import profile from '../assets/id2.png';
import '../assets/css/home.css';

function Home({ setActivePage }) {
    return (
        <main>
            <div id="main-home">
                <div id="info-card">
                    <h1>
                        Welcome!
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </h1>
                    <p>I'm Vince, an enthusiast Fullstack Web Developer! </p>
                    <p>Building scalable web applications using React, 
                        PHP, and MySQL with clean UI and structured backend systems.</p>
                    <button onClick={() => setActivePage('about')}>Learn more about me!</button>
                </div>
                <div id="picture-card">
                    <div className="id-card">
                        <img src={profile} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;