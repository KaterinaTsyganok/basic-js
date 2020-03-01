module.exports = function countCats(array) {
// Your task is to count the cats hidden in the backyard (presented by two-dimensional Array). 
// Cats hide well, but their ears ("^^") are clearly visible. 
// Your task is to implement the countCats(backyard) function that will count cats. Good luck!
// Number of cats found should be number. If no cats found, function should return 0.
// Write your code in src/count-cats.js.
  let cat = "^^",
    count = 0;

  array.forEach(element => {
    element.forEach(isCat => {
      if (isCat === cat) count++;
    })
  });

  return count;
};
