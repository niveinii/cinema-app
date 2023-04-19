import React from "react"
import Fade from "@material-ui/core/Fade"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import { makeStyles } from "@material-ui/core/styles"

import styled from "styled-components"
import { RoundedButton } from "./roundedButton"
import arrowPointLeft from "../../assets/arrowPointLeft.png"

type Props = {
  isOpen: boolean
  children: any
  handleClose: () => void
}

function GenericModal({ isOpen, children, handleClose }: Props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Body>
          {children}
          <ButtonContainer>
            <RoundedButton
              width="20%"
              flexDirection="row-reverse"
              text="Back to list"
              cb={handleClose}
              icon={arrowPointLeft}
            />
          </ButtonContainer>
        </Body>
      </Fade>
    </Modal>
  )
}

const Body = styled.div`
  width: 80%;
  background-color: white;
  border: 2px solid #000;
  padding-bottom: 3%;
  @media screen and (max-width: 400px) {
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))
export default GenericModal
