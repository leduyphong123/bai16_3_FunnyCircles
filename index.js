
function Circles(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircles() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let r = Math.floor(Math.random() * 200);
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
    let circles = new Circles(x, y, r);
    let color = getRandomColor();
    ctx.beginPath();
    ctx.arc(circles.x, circles.y, circles.radius, 0, 2 * 3.14);
    ctx.fillStyle = color;
    ctx.fill();
}
// function getXY() {
//     return Math.floor(Math.random() * 100);
// }

for (let i=0;i<10;i++){
    createCircles();

}