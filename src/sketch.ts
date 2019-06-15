let gantt: Gantt

function setup() {
    createCanvas(windowWidth, windowHeight)
    gantt = new Gantt()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    background(100)
    //morph.draw()
    gantt.draw()
}
