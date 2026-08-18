let email = "email@email.com"
function maskEmail(email){

  let positionAt = email.indexOf("@")

  let firstL = email.slice(0,1)

  let lastL = email.slice(positionAt - 1, positionAt)

  let manyOfStars = positionAt -2

  let stars = "*".repeat(manyOfStars)

  let restOfEmail = email.slice(positionAt)

  return firstL + stars + lastL + restOfEmail

}
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
console.log(maskEmail(email))
