const dobInput = document.getElementById("dateOfBirth");

dobInput.addEventListener("input", () => {
    const dobValue = dobInput.value;
    const dob = new Date(dobValue);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18 || age > 55) {
        dobInput.setCustomValidity("Age must be between 18 and 55.");
    } else {
        dobInput.setCustomValidity("");
    }
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("emailAddress").value;
    const password = document.getElementById("userPassword").value;
    const dob = document.getElementById("dateOfBirth").value;
    const accepted = document.getElementById("acceptTerms").checked ? "Yes" : "No";

  
    const table = document.getElementById("userTable").querySelector("tbody");
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = password;
    newRow.insertCell(3).textContent = dob;
    newRow.insertCell(4).textContent = accepted;

   
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = { name, email, password, dob, accepted };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users); 

   
    document.getElementById("registrationForm").reset();
});