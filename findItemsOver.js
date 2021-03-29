function findItemsOver(list, amount){
  var result =[];
  
  for (var i=0;i<list.length;i++){
    var newList=list[i];
    if(newList.qty>amount){
      result.push(newList)
    }
  }
  return result;
}