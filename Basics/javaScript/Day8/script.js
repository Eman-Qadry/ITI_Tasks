document.addEventListener("DOMContentLoaded", () => {
    
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const rememberMeChecked = localStorage.getItem("rememberMe") === "true";

    if (rememberMeChecked && storedUsername && storedPassword) {
        document.getElementById("username").value = storedUsername;
        document.getElementById("password").value = storedPassword;
        document.getElementById("rememberMe").checked = true;
    }
});

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
        
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMe", "true");
        alert("login data is saved");
    } else {
     
        localStorage.clear()
        localStorage.setItem("rememberMe", "false");
        alert("login data not saved as 'Remember Me' is unchecked.");
    }
});
// a  answer
/* we can use session storage but it is temporary storage .it lasts only for the duration of the page session (while the browser tab is open)
while local storage is a better choice because it persists even after the browser is closed.*/
//b 
/* local storage:	Shared across all tabs/windows of the same origin.
session storage:Limited to the specific tab.
//c answer
/*
 you can access both local storage and session storage from another page on the same site, provided the pages share the same origin (protocol, domain, and port).
However, session storage is limited to the same tab, so it won't be accessible if you navigate to a different page in a new tab or browser window.*/


const student = {
    ID: 12345,
    name: "eman qadry",
    age: 23,
    address: {
        street: "15 Main Street",
        city: "Assiut",
        country: "Egypt"
    },
    skills: ["JavaScript", "Python", "Problem Solving"],
    isLeader: true
};

console.log(student);

const students = [
    {
        ID: 12345,
        name: "Ahmed Ali",
        age: 21,
        address: {
            street: "15 Main Street",
            city: "Cairo",
            country: "Egypt"
        },
        skills: ["JavaScript", "Python", "Problem Solving"],
        isLeader: true
    },
    {
        ID: 67890,
        name: "Sara Mohamed",
        age: 22,
        address: null,
        skills: ["HTML", "CSS", "Graphic Design"],
        isLeader: false
    },
    {
        ID: 11223,
        name: "Omar Hussein",
        age: 20,
        address: {
            street: "10 Elm Street",
            city: "Giza",
            country: "Egypt"
        },
        skills: ["Java", "C++", "Data Structures"],
        isLeader: false
    }
];


students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Skills: ${student.skills.join(", ")}`);
    console.log("------");
});
// yes json can hold null and boolean values
/* json:
Represents data as key-value pairs, arrays, and objects.
Supports multiple types (string, number, array, boolean, null).
Fixed structure; not extensible.

xml;
Represents data with hierarchical tree-like structures.
All data is treated as text

	Extensible with custom tags.*/
    