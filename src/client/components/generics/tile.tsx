import React from "react"
import styled from "styled-components"
import star from "../../assets/star.png"
import arrowPointRight from "../../assets/arrowPointRight.png"
import {
  ratingColors,
  VerbalRating,
  NO_RATING_MESSAGE,
  READ_MORE_MESSAGE,
} from "./config"
import { RoundedButton } from "./roundedButton"

type Props = {
  image: string
  title: string
  rating: number
  released: string
  buttonCb: (id: string) => Promise<void>
  id: string
}
const getVerbalRating = (rating: number | typeof NaN): VerbalRating => {
  if (isNaN(rating)) return VerbalRating.Default
  if (rating < 6) return VerbalRating.Bad
  if (rating < 8) return VerbalRating.Good
  return VerbalRating.Great
}

export const Tile = ({
  image,
  title,
  released,
  rating,
  buttonCb,
  id,
}: Props) => {
  const verbalRating = getVerbalRating(rating)
  return (
    <TileContainer>
      <MovieImage>
        <img src={image} alt="" />
      </MovieImage>
      <MovieTitle>
        {title} ({released})
      </MovieTitle>
      <MovieRating>
        <StyledStar src={star} alt="" />
        <RatingWrapper verbalRating={verbalRating}>
          {rating || NO_RATING_MESSAGE}
          <StyledVerbalRating>{verbalRating}</StyledVerbalRating>
        </RatingWrapper>
      </MovieRating>
      <RoundedButton
        text={READ_MORE_MESSAGE}
        icon={arrowPointRight}
        cb={() => buttonCb(id)}
      />
    </TileContainer>
  )
}
const StyledStar = styled.img`
  height: 20px;
  width: 20px;
`
const StyledVerbalRating = styled.span`
  margin-left: 10px;
`
const RatingWrapper = styled.div<{ verbalRating: VerbalRating }>`
  ${({ verbalRating }) => `color: ${ratingColors[verbalRating]}`}
`
const MovieImage = styled.div`
  flex: 15;
`
const MovieRating = styled.div`
  display: flex;
  gap: 5%;
  align-items: end;
`

const MovieTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 18px;
  margin: 5% 0;
  flex: 5;
`

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  flex-wrap: wrap;
  @media screen and (max-width: 1700px) {
    width: 15%;
  }
  @media screen and (max-width: 1250px) {
    width: 20%;
  }
  @media screen and (max-width: 900px) {
    width: 30%;
  }
  @media screen and (max-width: 600px) {
    width: 40%;
  }
  @media screen and (max-width: 450px) {
    width: 50%;
  }
  @media screen and (max-width: 450px) {
    width: 40%;
  }
`
