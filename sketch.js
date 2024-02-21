var sketch = function (s) {
    var mic, fft;
    s.setup = function () {
        s.createCanvas(800, 700);
        s.noFill();
        mic = new p5.AudioIn();
        mic.start();
        fft = new p5.FFT();
        fft.setInput(mic);
    };
    s.draw = function () {
        s.background(200);
        var spectrum = fft.analyze();
        s.beginShape();
        for (var i = 0; i < spectrum.length; i++) {
            s.vertex(i, s.map(spectrum[i], 0, 255, s.height, 0));
        }
        s.endShape();
    };
};
new p5(sketch);
