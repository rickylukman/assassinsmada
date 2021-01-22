import React from 'react'
import { 
InfoSec,
InfoRow,
InfoColumn,
TextWrapper 
} from './InfoSectionElements'
import { Container } from '../../globalStyles'

const InfoSection = ({ lightBg,imgStart }) => {
    return (
        <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>HomePage</TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}

export default InfoSection
