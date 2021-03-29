function totalPhoneBill(data){
  var newData = data.split(",");
  var total = 0;
  
  for (var i=0;i<newData.length;i++){
    var trimData = newData[i].trim();
     if (trimData === "call"){
       total += 2.75;
     } else if  (trimData === "sms"){
       total += 0.65;
     }
       
}return "R"+ total.toFixed(2);
}