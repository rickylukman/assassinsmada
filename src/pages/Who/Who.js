import React from 'react'
import { homeObjThree, homeObjFour, homeObjFive } from './Data'
import { InfoSection, Carousel } from '../../components'

const Who = () => {
    return (
        <>
            <InfoSection {...homeObjThree} />
            {/* <Carousel /> */}
            {/* <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} /> */}
        </>
    )
}

export default Who
