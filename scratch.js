function dictionary_sort2(item) {
  // Your code here to sort the array
  var len     = item.length,     // number of items in the array
      value,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section

  for (i=0; i < item.length; i++) {

      // store the current value because it may shift later
      value = item[i];

      /*
       * Whenever the value in the sorted section is greater than the value
       * in the unsorted section, shift all items in the sorted section over
       * by one. This creates space in which to insert the value.
       */
      for (j=i-1; j > -1 && item[j] > value; j--) {
          item[j+1] = item[j];
      }

      item[j+1] = value;
  }

  return item;
}
