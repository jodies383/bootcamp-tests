function mostProfitableDepartment(salesData){
  var saleEmpty = {};
  
  for(var i=0;i<salesData.length;i++){
    var saleDate = salesData[i];
    saleEmpty[saleDate.department] = 0;
  }
  for (var i=0;i<salesData.length; i++){
    var saleDate = salesData[i];
    var myTotal = saleEmpty[saleDate.department];
    
   myTotal += saleDate.sales;
    saleEmpty[saleDate.department] = myTotal;
  }
  var mySales = 0;
  var theDep = "";
  for (var depSales in saleEmpty){
    var myDepSales = saleEmpty[depSales];
    if(myDepSales>mySales){
      mySales=myDepSales;
      theDep=depSales
    }
  } console.log("day " + theDep)
  return theDep
}