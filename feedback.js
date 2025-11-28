document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let fb = document.getElementById("feedback").value.trim();

    if(!name || !email || !fb){
        alert("Please fill all fields");
        return;
    }

    document.getElementById("output").innerHTML =
        `<div class="feedback-card">
            <h3>Feedback Submitted</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Feedback:</strong> ${fb}</p>
        </div>`;
});
