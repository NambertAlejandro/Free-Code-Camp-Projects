let year = 2000
function isLeapYear(yearBorN){
  if(yearBorN%4 === 0){

    if(yearBorN%100 === 0){

      if(yearBorN%400 === 0){

        return `${yearBorN} is a leap year.`

      }else{

        return `${yearBorN} is not a leap year.`

      }
    }else{

      return `${yearBorN} is a leap year.`

    }
  }else{

    return `${yearBorN} is not a leap year`
    
  }
}
const result = isLeapYear(year)
console.log(result)