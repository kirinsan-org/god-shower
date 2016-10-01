$(document).ready(_ => {
  let aspect = 140 / 200;
  setInterval(_ => {

    let size = Math.floor(Math.random() * 70) + 40

    let r = 255 - Math.floor(Math.random() * 70);
    let g = 255 - Math.floor(Math.random() * 70);
    let b = 255 - Math.floor(Math.random() * 70);

    $(`<img src="kiringod.gif" width="${size}" height="${size * aspect}">`)
      .box2d({
        'y-velocity': 20,
        'x-velocity': 10
      })
      .appendTo('body');

    $('body').css('background-color', `rgb(${r},${g},${b})`);

  }, 200);
});
