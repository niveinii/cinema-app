import React from "react"
import styled from "styled-components"

import {
  adaptRankingString,
  separateHoursAndMinutes,
} from "../../../../utils/utils"
import GenericModal from "../../../generics/modal"
import StarLogo from "../../../../assets/star.png"
import { Movie, MovieKeys } from "../../../../types/movies"
import { NO_RATING_MESSAGE } from "../../../generics/config"

type Props = {
  isModalOpen: boolean
  selectedMoviesState: Movie
  closeCb: () => void
}

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
          {rating ? (
            <RankContainer>
              <StarWrapper src={StarLogo} alt="" />
              <div>{adaptRankingString(rating)}</div>
            </RankContainer>
          ) : (
            <div>{NO_RATING_MESSAGE}</div>
          )}
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
  display: flex;
  align-items: center;
  gap: 10px;
`
const ModalBodyContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 4%;
  justify-content: space-between;
  padding: 4% 4%;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }
`
const TextContainer = styled.div`
  display: flex;
  line-height: 1.5;
  flex-direction: column;
  gap: 5%;
  flex: 50%;
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
