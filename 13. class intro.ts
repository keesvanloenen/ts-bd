class Media {
  #id: number;

  constructor(protected length: number) {
    this.#id = 2;
  }
}
class Movie extends Media {
  private static teller: number;

  public constructor(length: number, public title: string) {
    super(length);
    Movie.teller++;
  }

  static get aantal() {
    return Movie.teller;
  }
}

const m1 = new Movie(132, 'Star Wars');
const m2 = new Movie(132, 'Star Wars');
console.log(m1);
console.log(m1.title);
console.log(Movie.aantal);
