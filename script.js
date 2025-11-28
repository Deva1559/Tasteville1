// Star rating
let stars = document.querySelectorAll(".stars span");
let ratingInput = document.getElementById("rating");

stars.forEach(star => {
    star.addEventListener("click", function() {
        let value = this.getAttribute("data-value");
        ratingInput.value = value;

        stars.forEach(s => s.classList.remove("selected"));
        this.classList.add("selected");
    });
});


// Feedback submit
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let rating = ratingInput.value;
    let feedback = document.getElementById("feedback").value.trim();
    let output = document.getElementById("output");

    if (name === "" || email === "" || feedback === "" || rating === "") {
        alert("Please fill out all fields and select a rating.");
        return;
    }

    let emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    let box = document.createElement("div");
    box.classList.add("feedback-box");

    box.innerHTML = `
        <p><strong>${name}</strong> (${email})</p>
        <p>Rating: ${"★".repeat(rating)}</p>
        <p>${feedback}</p>
    `;

    output.prepend(box);

    document.getElementById("feedbackForm").reset();
    stars.forEach(s => s.classList.remove("selected"));
});
