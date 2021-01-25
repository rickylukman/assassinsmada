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
    } from '../InfoSection/InfoSectionElements'
import { Container } from '../../globalStyles'

const Carousel = (
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
) => {
    return (
        <>
        {/* KAROSEL DI DALAM SINI */}
        <InfoSec lightBg={lightBg}> 
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>ININIH</TopLine>
                            <Heading lightText={lightText}>ININIH</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>DESKIRI</Subtitle>
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

export default Carousel
