

console.log("validation.js loaded");


    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        var name = document.getElementById("name").value;
        if (name == "") {
            document.getElementById("name-error").innerText = "Name is obligatory";
            return false;
        }

        var email = document.getElementById("email").value;
        if (email == "") {
            document.getElementById("email-error").innerText = "Email is obligatory";
            return false;
        }
    });
