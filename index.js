function XO(str) {
  const lowerCaseStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'x') {
      countX++;
    } else if (lowerCaseStr[i] === 'o') {
      countO++;
    }
  }

  return countX === countO;

}

// if u have suggsetion to my code im glad to hear it
