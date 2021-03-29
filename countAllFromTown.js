function countAllFromTown(regNum,regStart){
  var newReg = regNum.split(",");
  var countReg = 0;
  
  for (var i=0;i<newReg.length;i++){
    var regTrim = newReg[i].trim();
    
    if (regTrim.startsWith(regStart)){
      countReg++;
    }
  }return countReg;
}