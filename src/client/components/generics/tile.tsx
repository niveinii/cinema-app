import React from "react"
import styled from "styled-components"
import star from "../../assets/star.png"
import arrowPointRight from "../../assets/arrowPointRight.png"
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
        <StyledStar src={star} alt="" />
        <RatingWrapper verbalRating={verbalRating}>
          {rating || NO_RATING_MESSAGE}
        </RatingWrapper>
      </MovieRating>
      <ReadMoreBtn>
        Read more <StyledArrow src={arrowPointRight} />
      </ReadMoreBtn>
    </TileContainer>
  )
}
const StyledStar = styled.img`
  height: 20px;
  width: 20px;
`

const StyledArrow = styled.img`
  text-align: center;
  cursor: pointer;
  height: 10px;
  width: 20px;
`
const ReadMoreBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px 15px;
  border: 1px solid #000000;
  background-color: #00d7ff;
  border-radius: 100px;
`
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
