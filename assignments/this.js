/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding - in the browser 'this' binds to Window obejct scope
* 2. implicit binding - 'this' binds to the object scope this 'this' was created
* 3. explicit binding - 'this' binds to the object scope that was passed in via call(), apply(), bind()
* 4. New (contructor) binding - 'this' binds to the object instantiated via constructor function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
//console.log(this) // return the Window object

// Principle 2
// code example for Implicit Binding
let cat = {
    name: "frasier",
    age: 12,
    eat: function(){
        return `${this.name} is eating the snacks`
    }
}
//console.log(cat.eat())

// Principle 3
// code example for New Binding
function Cat(data){
    this.name = data.name
    this.age = data.age
    this.eat = function(){
        return `${this.name} is eating the ${data.food}`
    }
}

Cat.prototype.lick = function(){
    return `${this.name} is licking his paws`
}

let niles = new Cat({name:'niles', age:12, food:'Dry Food'})
//console.log(niles.eat())
console.log(niles.lick())

// Principle 4
// code example for Explicit Binding
function Dog(data){
    this.color = data.color
    Cat.call(this, data)
}

Dog.prototype.wag = function(){
    return `${this.name} is wagging his ${this.color} tail`
}

Dog.prototype.lick = Object.create(Cat.prototype.lick)


let lucky = new Dog({name:'Lukcy', age: 100, color:"black", food:'Dog food'})
console.log(lucky.eat())
console.log(lucky.wag())
console.log(lucky.lick())
