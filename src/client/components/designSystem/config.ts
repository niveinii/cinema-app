export const NO_RATING_MESSAGE = "No Rating"
export const READ_MORE_MESSAGE = "Read more"

export enum VerbalRating {
  Default = "",
  Bad = "Bad",
  Good = "Good",
  Great = "Great",
}

export const ratingColors = {
  [VerbalRating.Default]: "black",
  [VerbalRating.Bad]: "rgba(232,30,67,0.96)",
  [VerbalRating.Good]: "#ccab3e",
  [VerbalRating.Great]: "#5ca234",
}
