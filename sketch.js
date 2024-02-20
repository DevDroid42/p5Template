/**
 * @typedef {import('p5')} p5
 */
const p5 = /** @type {p5} */ (window.p5);

let mic, fft;
function setup() {
  createCanvas(800, 700);
  noFill();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);

  let spectrum = fft.analyze();

  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}
