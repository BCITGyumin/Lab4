const courseList = [
  { code: "ACIT-1420", name: "Introduction to Systes Administration" },
  { code: "ACIT-1620", name: "Web Fundamental Technologies" },
  { code: "ACIT-1630", name: "Databse Systems" },
];

//  Get 4-digit Number from the user
let user;
do {
  user = prompt("Please Enter a 4-digit number of the course code");
} while (isNaN(user) || !(user.length === 4));

//  Check the course in the array
let courseFound = false;
for (let i = 0; i < courseList.length; i++) {
  if (courseList[i].code.substring(5) === user) {
    console.log(
      `Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`
    );
    courseFound = true;
    break;
  }
}

if (!courseFound) {
  courseList.push({ code: `ACIT-${user}`, name: null });
  console.log(`Course with code ACIT-${user} has been added to the list.`);
}

console.log(courseList);

//  createCourseArray Function
function createCourseArray() {
  const courseArray = [];
  const courseNameArray = document.getElementsByClassName("courseName");
  const courseDateArray = document.getElementsByClassName("courseDate");
  for (let i = 0; i < courseNameArray.length; i++) {
    courseArray.push({
      code: courseNameArray[i].innerText,
      date: courseDateArray[i].innerText,
    });
  }
  return courseArray;
}

console.log(createCourseArray());

//  findCourse
function findCourse(array) {
  let exists = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i]["code"].includes(user)) {
      exists = true;
      break;
    }
  }
  if (exists) {
    const nameArray = document.getElementsByClassName("courses-content-layout");
    for (let a = 0; a < nameArray.length; a++) {
      if (nameArray[a].innerText.includes(user)) {
        nameArray[a].style.backgroundColor = "lightgreen";
      }
    }
  } 
  else 
  {
    const newDiv = document.createElement("div");
    const lastDiv = document.querySelector(".last-div");
    lastDiv.classList.replace("last-div","courses-list-content");
    const section = document.querySelector("#courses-list")
    newDiv.classList.add("courses-content-layout");
    section.append(newDiv)
    newDiv.classList.add(".last-div");
    const crsName = document.createElement("a");
    const crsDate = document.createElement("p");
    const crsDescript = document.createElement("p");
    crsName.setAttribute("href", "")
    crsName.classList.add("course");
    crsName.textContent = `ACIT-${user}`;
    newDiv.append(crsName);
    crsDate.classList.add("courseDate");
    crsDate.textContent = 'Fall 2020'
    newDiv.append(crsDate)
    crsDescript.classList.add("courses-paragraph")
    crsDescript.textContent = 'N/A'
    newDiv.append(crsDescript)
  }
}

findCourse(createCourseArray());
