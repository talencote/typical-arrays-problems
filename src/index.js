
exports.min = function min (array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  let min = array[0];
  array.forEach(element => {
    if (element < min) {
      if (element === NaN || element === undefined) {
        return 0;
      }
      min = element;
    }
  });
  return min;
}

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  let max = array[0];
  array.forEach(element => {
    if (element > max) {
      if (element === NaN || element === undefined) {
        return 0;
      }
      max = element;
    }
  });
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  array.forEach(element => {
    if (element === NaN || element === undefined) {
      return 0;
    }
    sum += element;
  })
  return sum / array.length; 
}
