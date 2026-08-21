let lunches = []
function addLunchToEnd(arrayLunches, lunchItem) {
  arrayLunches.push(lunchItem)
  console.log(`${lunchItem} added to the end of the lunch menu.`)
  return arrayLunches;
}

console.log(addLunchToEnd(lunches, "Tacos"))

function addLunchToStart(arrayLunches, lunchItem) {
  arrayLunches.unshift(lunchItem)
  console.log (`${lunchItem} added to the start of the lunch menu.`)
  return arrayLunches;
}

console.log(addLunchToStart(lunches, "Sushi"))


function removeLastLunch(arrayLunches){
  if (arrayLunches.length === 0){
    console.log('No lunches to remove.')
  }else{
  let lastLunche = arrayLunches.pop()
  console.log(`${lastLunche} removed from the end of the lunch menu.`)
  }
  return arrayLunches
}

console.log(removeLastLunch(lunches))

function removeFirstLunch(arrayLunches){
  let firstLunch = arrayLunches.shift()
  if (arrayLunches.length !== 0){
  console.log( `${firstLunch} removed from the start of the lunch menu.`)
  }else{
    console.log( 'No lunches to remove.' )
  }
  return arrayLunches
}

console.log(removeFirstLunch(lunches))


function getRandomLunch(arrayLunches){
  if(arrayLunches.length !== 0 ){
    let randomLunchPosition = Math.floor(Math.random() * arrayLunches.length)
    let randomLunch = arrayLunches[randomLunchPosition]
    console.log( `Randomly selected lunch: ${randomLunch}`)
    }else{
    console.log( 'No lunches available.')
    }
    return arrayLunches
}

console.log(getRandomLunch(lunches))

function showLunchMenu(arrayLunches){
    if (arrayLunches.length === 0 ){
      console.log('The menu is empty.')
    }else{
      console.log(`Menu items: ${arrayLunches.join(", ")}`)
    }
}
console.log(showLunchMenu(lunches))
