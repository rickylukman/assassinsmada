import React from 'react'
import { homeObjFour, homeObjFive } from './Data'
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        </>
    )
}

export default Home
