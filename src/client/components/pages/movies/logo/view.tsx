import React from "react"
import styled from "styled-components"

import logo from "../../../../assets/MoviesLogo.png"

export const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  )
}

const Container = styled.div`
  padding: 0 5%;
  align-items: center;
  background-color: white;
`
