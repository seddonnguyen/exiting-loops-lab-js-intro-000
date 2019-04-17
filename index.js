function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array; i++) {
    if(i === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
}
