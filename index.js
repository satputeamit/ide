// initialize SVG.js
var draw = SVG('drawing').size(700,700)
// console.log("draw :",draw);
var rect_width = 120;
var rect_height = 40

// draw pink square
class ip_box_element{
  constructor(){
    // creating element
    this.g1 = draw.group()

    var rct=this.g1.rect(rect_width, rect_height).move(10, 10)
    // console.log(rct);
    rct.radius(10);

    rct.attr({
      fill: 'gray',
      'fill-opacity': 0.5,
      stroke: '#000',
      'stroke-width': 2
    });

    var crl = this.g1.circle(15).move(123,22)
    crl.attr({
      'class':"i_crl",
      fill: 'white',
      stroke: '#000',
      'stroke-width': 2
    })

  }

  set_text(txt){
    var txt = this.g1.text(txt).move(40,20)
    // txt.linkTo("https://google.com")
  }

  box_move(x,y){
    this.g1.move(x,y)
  }

  get_id(){
    return this.g1.node.id;
  }

}


var b= new ip_box_element()
// b.set_text("hello")
b.box_move(0,0)
// console.log(b);
console.log(b.get_id());
