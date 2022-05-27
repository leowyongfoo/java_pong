import Ball from "./Ball";

const ball = new Ball(document,getElementById("ball"))

function update(time) {
    console.log(time)
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)