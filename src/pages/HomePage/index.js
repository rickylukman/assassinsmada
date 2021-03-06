import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data'
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            {/* yang 3 dikecilin, yang carousel gedean , atau image di Three dijadiin carousel*/}

            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
        </>
    )
}

export default Home
