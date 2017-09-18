anime({
  targets: 'div.box.red',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
  }
});

anime({
  targets: 'div.box.blue',
  translateY: [
    { value: 200, duration: 500, delay: 1000 },
    { value: 0, duration: 800 }
  ],
  rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 1000
  }
});
