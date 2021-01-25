import React from 'react'
import { homeObjThree, homeObjFour, homeObjFive } from './Data'
import { InfoSection, Carousel } from '../../components'

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjThree} />
        <Carousel/>
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        </>
    )
}

export default Home
