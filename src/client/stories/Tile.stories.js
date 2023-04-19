import React from "react"
import { Tile } from "../components/designSystem/tile"
import { MovieKeys } from "../types/movies"
export default {
  title: "Tile",
  component: Tile,
}
const mockMovie = {
  id: "215318",
  title: "Ace Ventura: When Nature Calls",
  image:
    "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
  synopsis:
    "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
  rating: "6.4",
  type: "movie",
  released: "1995",
  runtime: "1h34m",
  largeimage:
    "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
  unogsdate: "2020-06-18",
  imdbid: "tt0112281",
  download: "1",
}
export const WorkingTile = () => (
  <Tile
    image={mockMovie[MovieKeys.Image]}
    title={mockMovie[MovieKeys.Title]}
    rating={mockMovie[MovieKeys.Rating]}
    released={mockMovie[MovieKeys.Released]}
    id={mockMovie[MovieKeys.Id]}
    buttonCb={(id) => console.log(id)}
  />
)
