import React from 'react'
import { homeObjThree, homeObjFour, homeObjFive } from './Data'
import './index.css';
import { ImageSlider } from '../../components/Carousel/ImageSlider'
import { SliderData } from '../../components/Carousel/SliderData'

const Who = () => {
    return (
        <div className="p-5">
            <div className="flex">
                <ImageSlider slides={SliderData} />
            </div>
        </div>
    )
}

export default Who
