var box = document.getElementById("box")

box.addEventListener("mouseover", mouseOver)
box.addEventListener("mousedown", mouseDown)
box.addEventListener("mouseup", mouseUp)
box.addEventListener("dblclick", dblClick)
box.addEventListener("wheel", wheel)




function mouseOver() {
    box.style.backgroundColor = "blue"
}

function mouseDown() {
    box.style.backgroundColor = "red"

}

function mouseUp() {
    box.style.backgroundColor = "yellow"

}

function dblClick() {
    box.style.backgroundColor = "green"

}

function wheel() {
    document.style.backgroundColor = "orange"
}