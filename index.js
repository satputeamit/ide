// initialize SVG.js
console.log(window.width,window.height)
var draw = SVG('drawing').size(window.outerWidth,window.outerHeight)
console.log("draw :",draw);
var rect_width = 120;
var rect_height = 40

// draw pink square
class ip_box_element{
  constructor(){
    // creating element
    this.g1 = draw.group()

    this.rct=this.g1.rect(rect_width, rect_height).move(10, 10)
    // console.log(rct);
    this.rct.radius(10);

    this.rct.attr({
      fill: 'gray',
      'fill-opacity': 0.5,
      stroke: '#000',
      'stroke-width': 2
    });

    this.crl = this.g1.circle(15).move(123,22)
    this.crl.attr({
      'class':"i_crl",
      fill: 'white',
      stroke: '#000',
      'stroke-width': 2
    })

    this.selection()

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

  selection(){
    this.crl.draggable().on('dragmove', (e) => {
            e.preventDefault()
          })

    console.log(this.get_id());
    this.crl.mouseup(()=> {
      this.crl.fill({ color: 'white' })
      this.p2x = this.g1.cx()+this.crl.cx()
			this.p2y = this.g1.cy()+this.crl.cy()
    })

    this.crl.mousedown(()=> {
      this.crl.fill({ color: '#f06' })
      this.p1x = this.g1.cx()+this.crl.cx()
			this.p1y = this.g1.cy()+this.crl.cy()
    })
    this.g1.draggable();
  }


}

class path_line{
  constructor(x1,y1,x2,y2){
    console.log(x1,y1,x2,y2);
    this.ln = draw.line(x1,y1,x2,y2)
    this.ln.stroke({ color: '#f06', width: 10, linecap: 'round' })
  }

  way(){

  }
}


// ---------------------------test--------------------------------
var b= new ip_box_element()
// b.set_text("hello")
b.box_move(0,0)
// console.log(b);

console.log(b.get_id());


var b= new ip_box_element()
// b.set_text("hello")
b.box_move(100,100)
// console.log(b);
console.log(b.get_id());
