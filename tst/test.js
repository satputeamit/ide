
var draw = SVG('drawing').size(window.outerWidth,window.outerHeight)
var crl = draw.circle(50).move(123,22)
crl.draggable();

function update(){
  console.log(crl.cx())
  
}

function callback() {
  console.log("hi");
  update()
  animFrame = requestAnimationFrame(callback)
}
callback()

SVG.on(document, 'keydown', function(e) {
  var paddleDirection = e.keyCode == 40 ? 1 : e.keyCode == 38 ? -1 : 0
  console.log(paddleDirection);
  e.preventDefault()
})
