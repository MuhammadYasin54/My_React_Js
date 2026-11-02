import React, { useEffect, useState } from "react";
import image01 from "../../assets/Images/image01.jpg"
import image02 from "../../assets/Images/Image02.jpg"
import image03 from "../../assets/Images/image03.jpg"
import image04 from "../../assets/Images/image04.jpg"
import image05 from "../../assets/Images/image05.jpg"

const ImageSlider = () => {

    const images = [
        image01, image02, image03, image04, image05
    ]
    const [currntIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === images.length - 1) {
                    return 0;
                }
                else {
                    return prevIndex + 1
                }
            })
        }, 3000)
    }, [])
    return (
        <div>
            <h1>Images</h1>
            <img src={images[currntIndex]} alt="slider" width="600" height="400" />
        </div>
    )
}
export default ImageSlider;
