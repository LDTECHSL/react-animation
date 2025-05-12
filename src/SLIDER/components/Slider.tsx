import { useEffect, useRef } from "react";
import "../styles/slider.css";
import i1 from "../images/img1.jpg";
import i2 from "../images/img2.jpg";
import i3 from "../images/img3.jpg";
import i4 from "../images/img4.jpg";
import Navbar from "../../NAVBAR/Navbar";

const images = [i1, i2, i3, i4];

export default function Slider() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);
    const nextBtnRef = useRef<HTMLButtonElement>(null);
    const prevBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const timeRunning = 3000;
        const timeAutoNext = 7000;

        const next = nextBtnRef.current;
        const prev = prevBtnRef.current;
        const carousel = carouselRef.current;
        const list = listRef.current;
        const thumbnail = thumbnailRef.current;

        if (!next || !prev || !carousel || !list || !thumbnail) return;

        // Move first thumbnail to the end to loop
        const thumbnails = thumbnail.querySelectorAll(".item");
        if (thumbnails.length > 0) {
            thumbnail.appendChild(thumbnails[0]);
        }

        let runTimeOut: NodeJS.Timeout;
        let runNextAuto: NodeJS.Timeout;

        const showSlider = (type: "next" | "prev") => {
            const sliderItems = list.querySelectorAll(".item");
            const thumbItems = thumbnail.querySelectorAll(".item");

            if (type === "next") {
                list.appendChild(sliderItems[0]);
                thumbnail.appendChild(thumbItems[0]);
                carousel.classList.add("next");
            } else {
                list.prepend(sliderItems[sliderItems.length - 1]);
                thumbnail.prepend(thumbItems[thumbItems.length - 1]);
                carousel.classList.add("prev");
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carousel.classList.remove("next");
                carousel.classList.remove("prev");
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                next.click();
            }, timeAutoNext);
        };

        next.onclick = () => showSlider("next");
        prev.onclick = () => showSlider("prev");

        runNextAuto = setTimeout(() => {
            next.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <>
            <Navbar/>

            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={listRef}>
                    {images.map((img, idx) => (
                        <div className="item" key={`slide-${idx}`}>
                            <img src={img} />
                            <div className="content">
                                <div className="author">LD TECH SL</div>
                                <div className="title">DESIGN SLIDER</div>
                                <div className="topic">ANIMAL</div>
                                <div className="des">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                                    magnam sequi nesciunt minima...
                                </div>
                                <div className="buttons">
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="thumbnail" ref={thumbnailRef}>
                    {images.map((img, idx) => (
                        <div className="item" key={`thumb-${idx}`}>
                            <img src={img} />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="description">Description</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button ref={prevBtnRef}>&lt;</button>
                    <button ref={nextBtnRef}>&gt;</button>
                </div>
                <div className="time"></div>
            </div>
        </>
    );
}
