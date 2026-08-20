function truncateString(str, num){
  if(str.length - 1 > num){
    let newWordSliced = str.slice(num)
    let howManyPoints = str.length - num
    let points = "."
    let pointsRepeated = points.repeat(howManyPoints)
    let newWord = str.replace(newWordSliced, pointsRepeated )
    return newWord
  }else{
    return str
  }
}
const word = "WORKING HAHA"
const number = 8
console.log(truncateString(word, number))