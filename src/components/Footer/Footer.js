import React from 'react'
import {
    FaInstagram,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa';
// import {FaInstagram} from 'react-icons/fa'
// import {FaYoutube} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
import { 
    FooterContainer, 
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>ASSASSIN © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'//www.instagram.com/assassin_smada'} target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                        href={
                            '//www.youtube.com/channel/UCNA7ZKVkr4Ttjqf6DPGEHvg'
                        }
                        rel='noopener noreferrer'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href={'//twitter.com/assasin_smada'} target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>         
        </FooterContainer>
    );
}

export default Footer;
