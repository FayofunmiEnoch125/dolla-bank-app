import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/">How It Works</FooterLink>
              <FooterLink to="/">Tesimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Help and Support</FooterLinkTitle>
              <FooterLink to="/">Contact Us</FooterLink>
              <FooterLink to="/">Fraud</FooterLink>
              <FooterLink to="/">Help</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencers</FooterLink>
              <FooterLink to="/">Sponsorship</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">YouTube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              {" "}
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
