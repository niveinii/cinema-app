export const MAX_MOVIE_SCORE = 10

export const separateHoursAndMinutes = (timeString: string) => {
  if (!timeString) return
  const regex = /(\d+)h(\d+)m/
  const match = timeString.match(regex)
  if (!match) {
    throw new Error("Invalid time string")
  }
  const hours = match[1]
  const minutes = match[2]
  return `${hours}h ${minutes}m`
}

export const adaptRankingString = (ranking: number) =>
  `${ranking} / ${MAX_MOVIE_SCORE}`
