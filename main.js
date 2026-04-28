  /* global nn */
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