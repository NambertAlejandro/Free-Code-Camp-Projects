function confirmEnding(str, strToBeCompared){
  let manyOfEndings = strToBeCompared.length
  let position = str.length - manyOfEndings
  let lastStr = str.slice(position)
  if (lastStr === strToBeCompared){
    return true
  }else{
    return false
  }
}
let strOriginal = "Congratulation"
let strForComparation = "on"
console.log(confirmEnding(strOriginal, strForComparation))

// without using the method ".endsWith()" just substrings methods.