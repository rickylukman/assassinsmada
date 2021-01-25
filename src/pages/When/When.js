import React from 'react'
import { homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data'
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        </>
    )
}

export default Home
