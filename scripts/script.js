const courseList = 
[
    {code:"ACIT-1420", name:"Introduction to Systes Administration"},
    {code:"ACIT-1620", name:"Web Fundamental Technologies"},
    {code:"ACIT-1630", name:"Databse Systems"}
];

let user
do{
user = prompt("Please Enter a 4-digit number of the course code");
}
while(isNaN(user) || !(user.length === 4));

