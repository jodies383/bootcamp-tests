function findItemsOver20(itemList){
  var result = [];
  for (var i=0;i<itemList.length;i++){
    var loopList = itemList[i];
        if (loopList.qty>20){
      result.push(loopList);
      console.log(result);
    }
  } return result;
}