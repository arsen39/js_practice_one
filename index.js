// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

function minMaxFinder() {
  let arr = arguments;
  arr = arguments;

  const minNumb = minFinder(arr);
  const maxNumb = maxFinder(arr);

  return [minNumb, maxNumb];
}

function minFinder(arr) {
  let minNumb = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minNumb > arr[i]) {
      minNumb = arr[i];
      continue;
    }
  }
  return minNumb;
}

function maxFinder(arr) {
  let maxNumb = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNumb < arr[i]) {
      maxNumb = arr[i];
      continue;
    }
  }
  return maxNumb;
}

// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function averageFinder(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }

  return summ / 2;
}

// Выведите на экран случайное целое число от 1 до 100.
// Заполните массив 10-ю случайными целыми числами.

const RANDOM_ARRAY_LENGTH = 10;
const MAX_RANDOM_NUMBER = 100;

function randomArrayFiller() {
  let arr = new Array();

  for (let i = 0; i < RANDOM_ARRAY_LENGTH; i++) {
    arr.push(Math.ceil(Math.random() * MAX_RANDOM_NUMBER));
  }

  return arr;
}

// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.


