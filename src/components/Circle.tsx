import "../styles/circle.css";
import d1 from "../images/dragon_1.jpg";
import d2 from "../images/dragon_2.jpg";
import d3 from "../images/dragon_3.jpg";
import d4 from "../images/dragon_4.jpg";
import d5 from "../images/dragon_5.jpg";
import d6 from "../images/dragon_6.jpg";
import d7 from "../images/dragon_7.jpg";
import d8 from "../images/dragon_8.jpg";
import d9 from "../images/dragon_9.jpg";
import d10 from "../images/dragon_10.jpg";

const images = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];

export default function Circle() {
    return (
        <div className="banner">
            <div className="slider" style={{ "--quantity": images.length } as React.CSSProperties}>
                {images.map((imgSrc, index) => (
                    <div
                        className="item"
                        key={index}
                        style={{ "--position": index + 1 } as React.CSSProperties}
                    >
                        <img src={imgSrc} alt={`Dragon ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="content">
                <h1 data-content="CSS ONLY">3D CIRCLE ANIME</h1>
                <div className="model"></div>
            </div>
        </div>
    );
}
