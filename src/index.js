const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const BG_COLOR = "#3d4051";
const LOGO_COLOR = "#fff";
const NAME = "runcloud.io";

const circle = (context, x, y, r) => {
  context.save();
  context.beginPath();
  context.translate(x, y);
  context.arc(0, 0, r, 0, 2 * Math.PI);
  context.fill();
  context.restore();
};

const roundedRect = (context, x, y, w, h, r, bg) => {
  context.fillStyle = bg;

  context.save();
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.fill();
  context.closePath();
  context.restore();
};

const text = (context, width) => {
  let nunitoFont = new FontFace("Nunito", "url(./Nunito.ttf)", {
    style: "italic",
    weight: "900",
  });

  nunitoFont.load().then((font) => {
    document.fonts.add(font);
    context.fillStyle = LOGO_COLOR;
    context.font = "italic 900 " + width * 0.117 + "px Nunito";
    context.setTransform(1, 0, -0.148, 1, 0, 0);
    context.fillText(NAME.toUpperCase(), 189, 725);
    context.setTransform(1, 0, 0, 1, 0, 0);
  });
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = BG_COLOR;
    context.fillRect(0, 0, width, height);

    context.fillStyle = LOGO_COLOR;
    context.strokeStyle = LOGO_COLOR;

    roundedRect(context, 338, 484.5, 370, 70, 29);

    circle(context, 561, 441, 102);
    circle(context, 668.2, 484.8, 70);
    circle(context, 448, 447.5, 87);
    circle(context, 375, 491, 63.5);

    roundedRect(context, 592, 377, 100, 22, 10, LOGO_COLOR);
    roundedRect(context, 708.5, 377, 68, 22, 10, LOGO_COLOR);

    roundedRect(context, 625, 398.5, 100, 21, 10, BG_COLOR);

    roundedRect(context, 623.7, 419.3, 110, 22, 10, LOGO_COLOR);
    circle(context, 761.6, 430.2, 10.5);
    roundedRect(context, 793, 419.3, 51, 22, 10, LOGO_COLOR);

    roundedRect(context, 641, 441, 105, 21, 10, BG_COLOR);

    roundedRect(context, 635.5, 462, 200, 21, 10, LOGO_COLOR);

    roundedRect(context, 666, 483, 105, 21, 10, BG_COLOR);

    roundedRect(context, 653, 504, 140, 21, 10, LOGO_COLOR);

    text(context, width);
  };
};

canvasSketch(sketch, settings);
