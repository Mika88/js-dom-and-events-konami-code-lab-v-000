const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

document.body.addEventListener('keydown', function(init) {
  const key = parseInt(init.detail || init.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Nice!");

      index = 0;
    }
  } else {
    index = 0;
  }
});
