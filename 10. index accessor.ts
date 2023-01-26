interface Movie {
  city: string;
  rating: number;
  releaseDate: Date;
}
interface MoviesDictionary {
  [title: string]: Movie;
}

const moviesDictionary: MoviesDictionary = {};

moviesDictionary.theLiving = { city: 'Arnhem', rating: 8.1, releaseDate: new Date(2022, 3, 1) };
moviesDictionary['Broker'] = { city: 'Ede', rating: 7, releaseDate: new Date(2022, 5, 1) };


