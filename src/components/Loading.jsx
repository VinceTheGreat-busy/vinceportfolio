import './loading.css';

function Loading() {
    return (
        <main className="loading-wrapper">
            <div className="loading-card">
                <div className="spinner"></div>
                <h2>Loading projects...</h2>
                <p>Fetching your creations from the void 🌌</p>
            </div>
        </main>
    );
}

export default Loading;