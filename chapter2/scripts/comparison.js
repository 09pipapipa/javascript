//EPSILON
const EPSILON = 0.0001;

let x = 0.98769;
let y = 0.98761;

console.log(Math.abs(x-y) < EPSILON);

//Math.abs(x - y) < EPSILON の条件は、x と y の値が EPSILON 
//より小さい差である場合にtrueを返す
//x = 0.98769 および y = 0.98761 の場合、差は 0.98769 - 0.98761 = 0.00008
//0.00008 < 0.0001なのでtrue