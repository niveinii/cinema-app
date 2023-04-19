import React from "react"
import styled from "styled-components"

import {
  ratingColors,
  VerbalRating,
  NO_RATING_MESSAGE,
  READ_MORE_MESSAGE,
} from "./config"
import star from "../../assets/star.png"
import { RoundedButton } from "./roundedButton"
import arrowPointRight from "../../assets/arrowPointRight.png"

type Props = {
  id: string
  image: string
  title: string
  rating: number
  released: string
  buttonCb: (id: string) => Promise<void>
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
  rating,
  released,
  buttonCb,
  id,
}: Props) => {
  const verbalRating = getVerbalRating(rating)
  const displayTitle = `${title} (${released})`
  return (
    <TileContainer>
      <ImageContainer>
        <Image src={image} alt="Movie Title" />
      </ImageContainer>
      <Title
        dangerouslySetInnerHTML={{
          __html: displayTitle,
        }}
      ></Title>
      <Rating>
        <StyledStar src={star} alt="Star Tile" />
        <RatingWrapper verbalRating={verbalRating}>
          {rating || NO_RATING_MESSAGE}
          <StyledVerbalRating>{verbalRating}</StyledVerbalRating>
        </RatingWrapper>
      </Rating>
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
const ImageContainer = styled.div`
  flex: 15;
`
const Image = styled.img`
  border-radius: 5%;
`
const Rating = styled.div`
  display: flex;
  gap: 5%;
  align-items: end;
`

const Title = styled.div`
  flex: 5;
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  flex-direction: column;
`

const TileContainer = styled.div`
  width: 10%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
