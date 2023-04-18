import React from "react"
import styled from "styled-components"
import star from "../../assets/star.png"

import { ratingColors, VerbalRating, NO_RATING_MESSAGE } from "./config"

type Props = {
  image: string
  title: string
  rating: number
  description: string
}
const getVerbalRating = (rating: number | typeof NaN) => {
  if (isNaN(rating)) return VerbalRating.Default
  if (rating < 6) return VerbalRating.Bad
  if (rating < 8) return VerbalRating.Good
  return VerbalRating.Great
}
export const Tile = ({ image, title, description, rating }: Props) => {
  const verbalRating = getVerbalRating(rating)
  return (
    <TileContainer>
      <MovieImage>
        <img src={image} alt="" />
      </MovieImage>
      <MovieTitle>{title}</MovieTitle>
      <MovieDescription dangerouslySetInnerHTML={{ __html: description }} />
      <MovieRating>
        <img style={{ height: "20px", width: "20px" }} src={star} alt="" />
        <RatingWrapper verbalRating={verbalRating}>
          {rating || NO_RATING_MESSAGE}
        </RatingWrapper>
      </MovieRating>
    </TileContainer>
  )
}

const RatingWrapper = styled.div`
  color: ${({ verbalRating }: { verbalRating: VerbalRating }) =>
    ratingColors[verbalRating]};
`

const MovieImage = styled.div`
  flex: 12;
`
const MovieRating = styled.div`
  display: flex;
  gap: 5%;
  flex: 1;
  align-items: end;
`

const MovieTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin: 5% 0;
  flex: 2;
`
const MovieDescription = styled.div`
  font-size: 14px;
  margin: 5% 0;
  flex: 7;
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
