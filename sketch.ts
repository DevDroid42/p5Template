let sketch = (s: p5) => {
  let mic, fft;
  
  s.setup = () => {
    s.createCanvas(800, 700);
    s.noFill();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
  };

  s.draw = () => {
    s.background(200);
    let spectrum = fft.analyze();
    s.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      s.vertex(i, s.map(spectrum[i], 0, 255, s.height, 0));
    }
    s.endShape();
  };
};

new p5(sketch);