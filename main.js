/* global nn */

function popUp () {
  const r = 200
  const cx = window.screen.width / 2
  const cy = window.screen.height / 2
  for (let i = 0; i < 20; i++) {
    const x = Math.sin(i) * r + cx
    const y = Math.cos(i) * r + cy
    const params = `width=100,height=100,left=${x},top=${y}`
    window.open('pop.html', '_blank', params)
  }
}

function setup () {
  nn.create('button')
    .content('click')
    .addTo('body')
    .on('click', popUp)
}

function drawGifs () {
  // if mouse is not (!) pressed down exit function
  if (!nn.mouseDown) return
  // otherwise, create a new gif
  nn.create('img')
    .set('src', 'whanim.gif')
    .positionOrigin('center')
    .position(nn.mouseX, nn.mouseY)
    .css('pointer-events', 'none')
    .addTo('body')
}

// click and drag mouse across the screen
// to draw new gif img elements
nn.on('mousemove', drawGifs)
nn.on('load', setup)