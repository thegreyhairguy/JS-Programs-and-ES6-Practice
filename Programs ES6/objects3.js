//destructuring of objects

const course = {
    cName : "JS Hindi",
    cFees : 1000,
    cInstr : "SAQIB",
}

// course.cInstr

const {cInstr}  = course;

console.log(cInstr);

const {cInstr : Instrcutor}  = course;


// const navbar = ({company})  => {
// }
// navbar(company = "CodeArcade");


//json API

// {
//     "name" : "SAQIB HASSAN",
//     "cName" : "JS in Hindi",
//     'cprice' : "Free"
// }


[
    {},{},{}
]