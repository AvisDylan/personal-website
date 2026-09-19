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

const background = document.body

let currentX = 0
let currentY = 0

function getTarget(){
    return {
        x: (Math.random() * 40 - 20),
        y: (Math.random() * 40 - 20)
    }
}

function animateTo(target, duration = 30_000){
    const startX = currentX
    const startY = currentY

    const deltaX = target.x - startX
    const deltaY = target.y - startY

    const startTime = performance.now()

    function frame(now){
        const t = Math.min((now - startTime) / duration, 1)

        const ease = Math.sin(t * Math.PI / 2)

        const newX = startX + deltaX * ease;
        const newY = startY + deltaY * ease;

        background.style.setProperty("--bg-x", newX + "%");
        background.style.setProperty("--bg-y", newY + "%");

        if (t < 1)
            requestAnimationFrame(frame);
        else {
            currentX = target.x;
            currentY = target.y;
            animateTo(getTarget(), duration);
        }
    }

    requestAnimationFrame(frame)
}

animateTo(getTarget(), 5_000)