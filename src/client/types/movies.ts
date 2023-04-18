export enum MovieKeys {
    Id = "id",
    Title = "title",
    Image = "image",
    Synopsis = "synopsis",
    Rating = "rating",
    Type = "type",
    Released = "released",
    Runtime = "runtime",
    LargeImage = "largeimage",
    UnogsDate = "unogsdate",
    ImdbId = "imdbid",
    Download = "download"
}
export type Movie = {
    [MovieKeys.Id]: string;
    [MovieKeys.Title]: string;
    [MovieKeys.Image]: string;
    [MovieKeys.Synopsis]: string;
    [MovieKeys.Rating]: string;
    [MovieKeys.Type]: string
    [MovieKeys.Released]: string;
    [MovieKeys.Runtime]: string;
    [MovieKeys.LargeImage]: string;
    [MovieKeys.UnogsDate]: string;
    [MovieKeys.ImdbId]: string;
    [MovieKeys.Download]: "0" | "1";
}