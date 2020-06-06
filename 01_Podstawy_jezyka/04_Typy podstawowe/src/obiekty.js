// Tworzymy funkcję budującą
function Builder() {
  this.x = 'Hello';
}
const myObj = new Builder();
const myObj2 = new Builder();

Builder.prototype.y = 'World!';
Builder.prototype.objProp = {};

console.log(myObj);
console.log(myObj.x);
console.log(myObj.y);
console.log(myObj.x,'',myObj.y);


// Funkcja tak naprawdę jest konstruktorem swoich "dzieci" - jej prototyp stanie się właściwościami obiektów z niej zbudowanych
console.log(Builder === Builder.prototype.constructor); // true
console.log(myObj.objProp === Builder.prototype.objProp); 
Builder.prototype.y = "Tomek";
console.log(myObj2.y);
myObj2.x = "Nara";
console.log(myObj2.x, '', myObj2.y);
console.log(myObj2);






