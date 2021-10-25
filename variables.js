for(let i = 0; i < 10; i++) {
    let j = 1;
    console.log(i * j);
}

// ------------- CREATING OBJECTS -------------
// method 1
let native = {
    name: "",
    age: "",
    gender: "",
    id: "",
    height: "",
    hobby: ""
}
console.log(native)

// method 2
let otherNative = new Object()
console.log(otherNative)

// method 3
function createNative(name, age, gender, id, height, hobby) {
    this.name = name
    this.age = age
    this.gender = gender
    this.id = id
    this.height = height
    this.hobby = hobby
}
let newNative = new createNative("Toye", 20, "Male", "01", "6.0ft", "Gaming");
console.log(newNative)



// ------------- RETRIEVING DATA OF OBJECTS -------------
// method 1: Dot Notation
let age = newNative.age
console.log(age)

// method 2: Square Brackets
let otherAge = newNative["age"]
console.log(otherAge)



// ------------- UPDATING DATA OF OBJECTS -------------
newNative.age = 13
let newAge = newNative["age"]
console.log(newAge)



// ------------- DELETING DATA OF OBJECTS -------------
delete newNative.age
console.log(newNative)



// ------------- "THIS" KEYWORD -------------
let cohort8Native = {
    fullName: "Toye",
    gender: "male",
    height: "short",
    hobby: "gaming",

    getFullName: function() {
        return this.fullName
    }
}
console.log(cohort8Native.getFullName())



// ------------- "BIND" KEYWORD -------------
let returnFullName = cohort8Native.getFullName.bind(cohort8Native)
console.log(returnFullName)
