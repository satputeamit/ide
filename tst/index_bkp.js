

// initialize SVG.js
// console.log(window.width,window.height)
var draw = SVG('drawing').size(window.outerWidth,window.outerHeight)
// console.log("draw :",draw);
var rect_width = 120;
var rect_height = 40

// draw element
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
    // this.callback()

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
      // console.log(this.p1x,this.p1y);
    })

    this.g1.draggable();
  }

  update_up(){

    this.p2x = this.g1.x()+this.crl.cx()
    this.p2y = this.g1.y()+this.crl.cy()
    // console.log("this.p1xy up : ",this.p1x,this.p1y);
    return [this.p2x,this.p2y];
  }

  update_down(){

    this.p1x = this.g1.x()+this.crl.cx()
    this.p1y = this.g1.y()+this.crl.cy()
    console.log("this.p1xy dn : ",this.p1x,this.p1y);
    return [this.p1x,this.p1y];
  }

}


class path_line{
  constructor(){

    this.x1=0;
    this.y1=0;
    this.x2=0;
    this.y2=0;
    this.ln = draw.line()
    // console.log("draw line:",this.ln);
  }

  way(){
    this.ln.plot(this.x1,this.y1,this.x2,this.y2)
    this.ln.stroke({ color: '#f06', width: 2, linecap: 'round' })
  }
  update(x1,y1,x2,y2){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.way();
  }
}


class obj_selector{
  constructor(){
    this.container = draw;
    this.find_ids()
  }

  find_ids(){
    // console.log("in find ids");
    var obj_path = new path_line()
    this.ids = []
    var x1;
    var y1;
    var x2;
    var y2;
    $('.i_crl').on('mousedown', function() {
              var test = document.getElementById($(this).attr('id'))
              var pos = test.getBoundingClientRect();
              console.log("pos dn :",pos);
              var x = pos.left+7 ,
                  y = pos.top +7;
              console.log("X_Y :",x,y);
              x1 = x
              y1 = y
              console.log($(this))
              console.log("line dn:-->",x1,y1,x2,y2);
              // this.ids.push($(this).attr('id'));
              obj_path.update(x1,y1,x1,y1);
            });

    $('.i_crl').on('mouseup', function() {
                  // console.log($(this).attr('id'));
                  var test = document.getElementById($(this).attr('id'))
                  var pos = test.getBoundingClientRect();
                  // console.log("pos up:",pos);
                  var x = pos.left+7 , y = pos.top +7;
                  // console.log("X_Y :",x,y);
                  x2 = x
                  y2 = y
                  // console.log("line up:-->",x1,y1,x2,y2);
                  // this.ids.push($(this).attr('id'));
                  obj_path.update(x1,y1,x2,y2);

            });



  }

  update(){
    console.log(this.ids);
  }

}


// ---------------------------test--------------------------------
var b= new ip_box_element()
b.box_move(0,0)

var test = document.getElementById(b.crl.node.id)
var pos = test.getBoundingClientRect();
var x = pos.left + pos.width/2, y = pos.top + pos.height/2;

var b1= new ip_box_element()
b1.box_move(100,100)

// var pth = new path_line()
var obj_sel = new obj_selector()
// var ids = obj_sel.find_ids()
// console.log(ids);

function callback(){
  var c1 = b.update_up()
  var c2 = b1.update_down()

  // pth.update(c1[0],c1[1],c2[0],c2[1])
  // obj_sel.update()
  // console.log("coordinates :",c1,c2);
  requestAnimationFrame(this.callback)
}
callback()

// $(document).ready(function() {


// });
