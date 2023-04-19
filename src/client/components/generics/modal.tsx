import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { RoundedButton } from "./roundedButton"
import arrowPointLeft from "../../assets/arrowPointLeft.png"

type Props = {
  isOpen: boolean
  handleClose: () => void
  children: any
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
        <div className={classes.paper}>
          {children}
          <RoundedButton
            flexDirection="row-reverse"
            text="Back to list"
            cb={handleClose}
            icon={arrowPointLeft}
          />
        </div>
      </Fade>
    </Modal>
  )
}
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
export default GenericModal
