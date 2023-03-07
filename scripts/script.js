const courseList = 
[
    {code:"ACIT-1420", name:"Introduction to Systes Administration"},
    {code:"ACIT-1620", name:"Web Fundamental Technologies"},
    {code:"ACIT-1630", name:"Databse Systems"}
];


//  Get 4-digit Number from the user
let user
do{
user = prompt("Please Enter a 4-digit number of the course code");
}
while(isNaN(user) || !(user.length === 4));


//  Check the course in the array
let courseFound = false;
for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.substring(5) === user) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        courseFound = true;
        break;
    }
}

if (!courseFound) {
    courseList.push({code:`ACIT-${user}`, name:null});
    console.log(`Course with code ACIT-${user} has been added to the list.`);
}

console.log(courseList);