var loop = []

function incrementVariable() {
  i = i + 1;
}

function forLoop(loop)  {
  for (var i = 0; i < 25; i++) {
    if (i<=1) {
      loop.push(`I am ${i} strange loop.`);
    } else {
      loop.push(`I am ${i} strange loops.`);
    }
  }
  return loop
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop();
    incrementVariable;
  } while (array.length > 0 && incrementVariable() === true)
}
