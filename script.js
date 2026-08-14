const dateOfBirth = new Date("2010-12-31")
const startedProgramming = new Date("2022-06-18") // i got this date by looking at when i created my github account 
const now = new Date()

let age = now.getFullYear() - dateOfBirth.getFullYear()
let programmingSince = now.getFullYear() - startedProgramming.getFullYear()

const birthdayPassed = now.getMonth() > dateOfBirth.getMonth() || (now.getMonth() === dateOfBirth.getMonth() && now.getDate() >= dateOfBirth.getDate())

if(!birthdayPassed)
    age--;

const codingSincePassed = now.getMonth() > startedProgramming.getMonth() || (now.getMonth() === startedProgramming.getMonth() && now.getDate() >= startedProgramming.getDate())

if(!codingSincePassed)
    programmingSince--;

document.getElementById("coding-since").textContent = programmingSince;
document.getElementById("age").textContent = age;