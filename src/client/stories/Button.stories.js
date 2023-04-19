import React from "react"
import { RoundedButton } from "../components/designSystem/roundedButton"
import PointRightArrow from "../assets/arrowPointRight.png"
export default {
  title: "RoundedButton",
  component: RoundedButton,
}

export const WorkingRoundedButton = () => (
  <RoundedButton
    text="niv"
    width="20%"
    icon={PointRightArrow}
    cb={(bla) => console.log(bla)}
  />
)
