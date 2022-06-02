const arrayTest = [18, 12, 1, 17, 15, 3]

// console.log(mergeSort(arrayTest, 0, arrayTest.length -1));


const _mergeArrays = (a, b) => {
  console.log("enterMergeArrays", a, b);
  const c = []

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }
  console.log(`returns array`, c);
  return c
}

const mergeSort = (a) => {
  console.log("mergeSort Start", a)
  if (a.length < 2) return a
  const middle = Math.floor(a.length / 2)
  const a_l = a.slice(0, middle)
  const a_r = a.slice(middle, a.length)
  console.log("MergeSort before recall left", a_l)
  const sorted_l = mergeSort(a_l)
  console.log('MergeSort before recall right', a_r)
  const sorted_r = mergeSort(a_r)
  console.log("MergeSort before call MergeArrays");
  return _mergeArrays(sorted_l, sorted_r)
}

console.log(mergeSort(arrayTest));

let hello = 1;
let goodbye = hello;
goodbye++;
console.log(hello,goodbye);