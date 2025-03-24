document.addEventListener("DOMContentLoaded", function () {
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" required><br><br>
        
        <label for="age">Age:</label>
        <input type="number" id="age" required><br><br>
        
        <button type="submit">Register</button>
    `;
    document.body.appendChild(form);
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = parseInt(document.getElementById("age").value, 10);
        
        if (age < 18 || age > 55) {
            alert("Age must be between 18 and 55.");
            return;
        }
        
        const userData = { name, email, age };
        localStorage.setItem("user", JSON.stringify(userData));
        
        alert("Registration successful!");
    });
});
