let katzDeliLine = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  let servingNow = deliLine[0];
  
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    deliLine.shift();
    return `Currently serving ${servingNow}.`;
  }
}

/*
function currentLine(deliLine) {
  let deliLineString = [];
  
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i in deliLine.length) {
      deliLineString = [...deliLineString, (i + 1) + `. ${deliLine[i]}`];
    } 
    if (deliLine.length === 1) {
      return `The line is currently: ${deliLineString[0]}`;
    } else {
        for (let j in deliLine.length) {
        return `The line is currently: ${deliLineString.j}.`;
        }
    }
  }
}
*/

function currentLine(deliLine) {
  let deliLineString = [];
  
  if (deliLine.length === 0) {
      return "The line is currently empty.";
  } else {
      for (let i in deliLine) {
        deliLineString = [...deliLineString, (i + 1) + `. ${deliLine[i]}`];
      } 
      return `The line is currently: ${deliLineString}`;
  }
}