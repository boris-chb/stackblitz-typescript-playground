// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv = document.getElementById('app');

const filterArray = <T>(items: T[], predicate: (item: T) => boolean): T[] => {
  const filteredArr = [];

  for (let item of items) {
    if (predicate(item)) {
      filteredArr.push(item);
    }
  }

  return filteredArr;
};

const dummyArr = [1, 2, 3, 4, 5];

const res = filterArray(dummyArr, (x) => x % 2 === 0);

console.log(res);

appDiv.innerHTML = `<h1>${res}</h1>`;
