function dictionary_sort2(item) {

  var len     = item.length,value, i,j;                         

  for (i=0; i < item.length; i++) {


      value = item[i];
      for (j=i-1; j > -1 && item[j] > value; j--) {
          item[j+1] = item[j];
      }
      item[j+1] = value;
  }
  return item;
}
