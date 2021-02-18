import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || length <= 0) {
        return null
    }

    return (
        <div className="utama">
            <center>
                <section>
                    <input type="file" />
                </section><br></br>
                <section section className="slider">
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                    <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
                    {
                        SliderData.map((slider, index) => {
                            return (
                                <div className={index === current ? "slide active" : "slide"} key={index}>
                                    {index === current && (<img className="image" src={slider.image} alt="ImageSlider" />)}

                                </div>
                            )
                        })
                    }
                </section >
            </center>
        </div>
    )
}
