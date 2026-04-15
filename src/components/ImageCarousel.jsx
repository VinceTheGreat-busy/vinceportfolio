import { useEffect, useState } from "react";

function ImageCarousel({ images, name }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="image-carousel">
            {images.map((img, i) => (
                <img
                    key={i}
                    src={`${import.meta.env.BASE_URL}${img}`}
                    alt={`${name} ${i}`}
                    className={`carousel-img ${i === index ? "active" : ""}`}
                />
            ))}
        </div>
    );
}

export default ImageCarousel;