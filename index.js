// Ex- Write a programme to filter movies releassed after 2000 and then sorted by their rating in descending order and return only the title of those movies.

const movies = [
  {title : 'd', year: 2005, rating: 4.0},
  {title : 'g', year: 1995, rating: 4.9},
  {title : 'j', year: 2004, rating: 4.6},
  {title : 'a', year: 2012, rating: 2.5},
  {title : 'r', year: 2018, rating: 4.5},
];

const output = movies
  .filter(m => m.year >= 2000 && m.rating >= 4.0)
  .sort((a,b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title)

console.log(output);
