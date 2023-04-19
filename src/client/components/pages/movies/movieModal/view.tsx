import React from "react"
import styled from "styled-components"

import {
  adaptRankingString,
  separateHoursAndMinutes,
} from "../../../../utils/utils"
import StarLogo from "../../../../assets/star.png"
import GenericModal from "../../../designSystem/modal"
import { Movie, MovieKeys } from "../../../../types/movies"
import { NO_RATING_MESSAGE } from "../../../designSystem/config"

type Props = {
  isModalOpen: boolean
  closeCb: () => void
  selectedMoviesState: Movie
}

export const Rating = ({ rating }: { rating: number }) =>
  rating ? (
    <RankContainer>
      <StarWrapper src={StarLogo} alt="Star Logo" />
      <div>{adaptRankingString(rating)}</div>
    </RankContainer>
  ) : (
    <div>{NO_RATING_MESSAGE}</div>
  )

export const MovieModal = ({
  selectedMoviesState,
  isModalOpen,
  closeCb,
}: Props) => {
  const rating = +selectedMoviesState?.[MovieKeys.Rating]
  return (
    <GenericModal isOpen={isModalOpen} handleClose={closeCb}>
      <ModalBodyContainer>
        <ImageContainer>
          <StyledImage src={selectedMoviesState?.[MovieKeys.Image]} />
        </ImageContainer>
        <TextContainer>
          <TitleContainer>
            {selectedMoviesState?.[MovieKeys.Title]}
          </TitleContainer>
          <div>
            {separateHoursAndMinutes(selectedMoviesState?.[MovieKeys.Runtime])}
          </div>
          <Rating rating={rating}></Rating>
          <div
            dangerouslySetInnerHTML={{
              __html: selectedMoviesState?.[MovieKeys.Synopsis],
            }}
          />
        </TextContainer>
      </ModalBodyContainer>
    </GenericModal>
  )
}

const TitleContainer = styled.p`
  line-height: 1.5;
  font: normal normal bold 45px/31px Arial;
  @media screen and (max-width: 400px) {
    font: normal normal bold 25px/31px Arial;
  }
`
const StarWrapper = styled.img`
  width: 30px;
  height: 30px;
`
const RankContainer = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`
const ModalBodyContainer = styled.div`
  gap: 4%;
  width: 80%;
  display: flex;
  padding: 4% 4%;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }
`
const TextContainer = styled.div`
  gap: 5%;
  flex: 50%;
  display: flex;
  line-height: 1.5;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    gap: 15px;
  }
`

const ImageContainer = styled.div`
  flex: 50%;
  @media screen and (max-width: 400px) {
    flex: 100%;
  }
`

const StyledImage = styled.img`
  width: 60%;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`
