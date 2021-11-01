// let cohort8Array = ["Toye", "Precious", "Israel", "Mojoyin", "Femi"]
//
// for (let i = 0; i < cohort8Array.length; i++) {
//     if (cohort8Array[i] !== "Femi") console.log(cohort8Array[i])
// }
//
// for (let key in cohort8Array) {
//     console.log(cohort8Array[key])
// }
//
// console.log(cohort8Array.splice(4, 1))
// console.log(cohort8Array)
//
// let newArray = cohort8Array.slice(1, 3)
// console.log(newArray)



// function setName(name) {
//     let returnName = ""
//
//     for (let i = 0; i < name.length; i++) {
//         returnName += name[i] + (i + 1)
//     }
//     return returnName;
// }
//
// console.log(setName("Israel"))



//  ------------------ CALLBACK FUNCTION ------------------
// setTimeout(() => { console.log("Toye")}, 5000)



let details = {
    sex: "male",
    first_name: "Olatoye",
    last_name: "Daramola",
    getFullName: function(anotherFunction) {
        console.log(anotherFunction(this));
    }
}

details.getFullName((obj) => {
    let full_name = obj.first_name + " " + obj.last_name
    if(obj.sex === "male") {
        return "Mr" + " " + full_name
    }
    return "Mrs" + " " + full_name;
    }
)