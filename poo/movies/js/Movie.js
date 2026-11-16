export default class Movie {
  constructor({ title, director, year, rating }) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
  }

  render() {
    const card = document.createElement("article");
    card.className = "movie-card";

    if (this.rating >= 8) {
      card.classList.add("movie-card--high-rated");
    }

    card.innerHTML = `
      <h2>${this.title}${this.rating >= 8 ? " ★" : ""}</h2>
      <p>Director: ${this.director}</p>
      <p>Year: ${this.year}</p>
      <p>Rating: ${this.rating}/10</p>
    `;

    return card;
  }
}
