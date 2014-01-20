module.exports = {
  draw: draw,
  magic: magic,
  progress: progress
};

var charm = require('charm')();

var cat = [
  '_,------,',
  '_|   /\\_/\\ ',
  '~|__( ^ .^)',
  '  ""  ""   ',
  '_,------,',
  '_|   /\\_/\\ ',
  '^|__( ^ .^)',
  ' ""  ""    ',
];

var skittles = [
  '-_',
  '_-',
  '-_',
  '_-',
];

charm.columns = process.stdout.columns;
charm.pipe(process.stdout);
charm.write("\n");

function magic(nyan) {
  nyan = nyan || 1;

  draw(nyan);

  setTimeout(function() {
    if ((nyan * 2) + 12 > charm.columns) {
      nyan = 0;
    }
    else {
      clear();
    }

    magic(++nyan);
  }, 100);
};

function clear() {
  charm.erase('line').up(1)
    .erase('line').up(1).erase('line').up(1)
    .erase('line').up(1).erase('line').up(1).erase('line');
};

function progress(pct) {
  if (pct > 1) clear();
  draw(Math.floor(((charm.columns - 12) * (pct / 100)) / 2));
};

function draw(nyan) {
  for (var l=0; l<4; l++) {
    var rainbow = rainbowify(Array(nyan || 1).join(skittles[l]));
    var animate = nyan % 3 ? 0 : 4;
    charm.write(rainbow + cat.slice(0 + animate, 4 + animate)[l] + "\n");
  }

  charm.write("\n");
};

function rainbowify(str) {
  var rainbow = [];
  var colors = [];

  for (var i=0; i < (6 * 7); i++) {
    var pi3 = Math.floor(Math.PI / 3);
    var n = (i * (1.0 / 6));
    var r = Math.floor(3 * Math.sin(n) + 3);
    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
    colors.push(36 * r + 6 * g + b + 16);
  }

  for (var i=0; i<str.length; i++) {
    var color = colors[i % colors.length];
    rainbow.push('\u001b[38;5;' + color + 'm' + str[i] + '\u001b[0m');
  }

  return rainbow.join('');
};
