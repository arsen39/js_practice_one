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

{
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = arr.concat(arr2);
}

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

{
  const arr = [1, 2, 3];
  const arrRev = arr.reverse();
}

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

{
  const arr = [1, 2, 3];
  arr.push(4, 5, 6);
}

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

{
  const arr = [1, 2, 3];
  arr.unshift(4, 5, 6);
}

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

{
  const arr = ["js", "css", "jq"];
  const killed = arr.shift();
  console.log(killed);
}

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
{
  const arr = ["js", "css", "jq"];
  const killed = arr.pop();
  console.log(killed);

  arr.push(killed); //Если хитрость задания в том чтобы просто показать и не удалить элемент, применив "pop"
}

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

{
  const arr = [1, 2, 3, 4, 5];
  const arrSlised = arr.slice(0, 3);
}

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

{
  const arr = [1, 2, 3, 4, 5];
  const arrSlised = arr.slice(3);
}

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 2);
}

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

{
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.splice(1, 3);
}

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(3, 0, "a", "b", "c");
}

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 0, "a", "b");
  arr.splice(6, 0, "c");
  arr.splice(9, 0, "e");
}

// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

{
  const arr = [3, 4, 1, 2, 7];
  arr.sort();
}

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

{
  const obj = { js: "test", jq: "hello", css: "world" };
  const arr = Object.keys(obj);
}

// Hеобходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и 
// возвращать true, если строка есть в массиве, и false - если нет

function hasElem (arr, string) {
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] === string) {
      return true;
    }
  }
  return false;
}

// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. 
// Если есть - вернуть true, а если нет - вернуть false.

function hasNumb (arr, numb) {
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] === numb) {
      return true;
    }
  }
  return false;
}

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
// Если есть -  вернуть true, а если нет - вернуть false.

function hasOverlap (arr) {
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      return true;
    }
  }
  return false;
}


