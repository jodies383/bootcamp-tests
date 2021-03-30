function fromWhere(reg){
  if (reg.includes("CY")){
    return "Bellville";
  } else if (reg.includes("CJ")) {
    return "Paarl";
  } else if (reg.includes("CA")) {
    return "Cape Town";
  } else {
    return "Some other place!";
  }
}