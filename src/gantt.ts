class Gantt {

  events: [number, number][]

  constructor() {
    this.events = range(10000).map((_) => [getRandomInt(10000), 0.5])
  }

  draw() {
    translate(width / 2, height / 2);
    noStroke()
    fill(color(255, 0, 0))

    translate(-millis()/10, 0, 0)

    this.events.forEach(e => {
      rect(e[0]*10, 1, e[1]*10, 1)
    });
  }
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

const range = (n: number) => Array.from({length: n}, (value, key) => key)
