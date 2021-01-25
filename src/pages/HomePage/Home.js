import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data'
import { InfoSection, Carousel } from '../../components'

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        {/* yang 3 dikecilin, yang carousel gedean */}
        <Carousel/>
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        </>
    )
}

export default Home
