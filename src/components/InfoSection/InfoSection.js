import React from 'react'
import { 
InfoSec,
InfoRow,
InfoColumn,
TextWrapper,
ImgWrapper,
Img,
TopLine,
Heading,
Subtitle 
} from './InfoSectionElements'
import { Container } from '../../globalStyles'

const InfoSection = ({ 
    primary,
    lightBg,
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    img,
    alt,
    start
}) => {
    return (
        <>
        <InfoSec lightBg={lightBg}> 
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}

export default InfoSection
