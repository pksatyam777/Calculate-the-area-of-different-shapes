class shape {
  constructor() {

  }
  area(){
    return ""

  }

}
class triangle extends shape{
  constructor(a,b){
    super()
    this.breadth=a
    this.height=b

  }
  area(){
    return (1/2)*this.breadth*this.height

  }
}
class square extends shape{
  constructor(a){
    super()
    this.side=a


  }
  area(){
    return this.side*this.side

  }
}
class circle extends shape{
  constructor(a){
    super()
    this.radius=a


  }
  area(){
    return 3.14*this.radius*this.radius

  }
}
class rectangle extends shape{
  constructor(a,b){
    super()
    this.length=a
    this.breadth=b

  }
  area(){
    return (1/2)*this.length*this.breadth

  }
}
var shapes=[ new triangle( 9, 8) , new square(5), new circle(2) , new rectangle(7, 2)  ]

function allshapes(n)
{
    var totalarea=0
    n.forEach( item => {
      console.log(item.area())
      totalarea=totalarea+item.area()
  })
  return totalarea
}

var d= allshapes(shapes)
console.log(d , "total area")

var c= new square(7)
console.log(c.area())
