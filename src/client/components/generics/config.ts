export const NO_RATING_MESSAGE = "No Available Rating"
export enum VerbalRating {
  Default = "default",
  Bad = "good",
  Good = "bad",
  Great = "great",
}

export const ratingColors = {
  [VerbalRating.Default]: "black",
  [VerbalRating.Bad]: "rgba(204,15,50,0.96)",
  [VerbalRating.Good]: "#ccab3e",
  [VerbalRating.Great]: "#5ca234",
}
