import React from "react"
import styled from "styled-components"
import footerLogo from "../../../../assets/FooterLogo.png"
import { iconsArray } from "./config"

export const Footer = () => {
  return (
    <Container>
      <StyledFooterLogo src={footerLogo} alt="" />
      <ContactUsText>Contact Us</ContactUsText>
      <HoursText>support@nextmovies.com</HoursText>
      <HoursText>
        Mon – Fri | 6:00am – 5:00 pm PT Mon – Fri | 6:00am – 5:00 pm PT
      </HoursText>
      <IconsContainer>
        {iconsArray.map((icon) => (
          <img key={icon.key} src={icon.icon} alt="" />
        ))}
      </IconsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  background: #231f20 0 0 no-repeat padding-box;
`
const ContactUsText = styled.div`
  margin-top: 27px;
  color: #ffffff;
  font: normal normal normal 33px/37px Georgia;
`
const IconsContainer = styled.div`
  flex-wrap: wrap;
  margin-top: 40px;
  width: 25%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1700px) {
    width: 35%;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`

const HoursText = styled.div`
  text-align: center;
  margin-top: 13px;
  color: #ffffff;
`
const StyledFooterLogo = styled.img`
  height: 40px;
  width: 40px;
`
