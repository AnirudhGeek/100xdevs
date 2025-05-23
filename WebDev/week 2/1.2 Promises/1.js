class Rectangle {
  constructor(width, height, color) {
    this.width = width; // here this is equal to rect
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    console.log(this);
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4, "blue"); //here we are creating an object called rect from the class Rectangle
const area = rect.area();
console.log(area);
rect.paint();



//SOME MORE CLASS
const now = new Date();
console.log(now);

const map = new Map()
map.set("name","Anirudh")
map.set("age",20)
console.log(map.get("name"))