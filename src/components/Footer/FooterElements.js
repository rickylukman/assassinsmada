import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #fff;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #101522;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #101522;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #101522;
  font-size: 24px;
`;