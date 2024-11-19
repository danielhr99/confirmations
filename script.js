document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault(); // מונע רענון של הדף

    const phone = document.getElementById('phone').value.trim();
    const guests = document.getElementById('guests').value.trim();
    const responseMessage = document.getElementById('response-message');

    // איפוס הודעה קיימת
    responseMessage.style.display = 'none';
    responseMessage.textContent = "";

    // בדיקת שדות
    if (!phone || !guests) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = "אנא מלא את כל השדות.";
        responseMessage.style.display = 'block';
        return;
    }

    // שליחת הנתונים ל-Google Sheets דרך ה-Web App
    fetch("https://script.google.com/macros/s/AKfycbwWoqo2ZMnzYbZzc5LVMcvtX4yORMS3vr_1zNji5IgJeOtFksXyT3TyBzHC49bEqyVF/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `phone=${encodeURIComponent(phone)}&guests=${encodeURIComponent(guests)}`,
    })
        .then((response) => response.text())
        .then((data) => {
            if (data === "Success") {
                responseMessage.style.color = 'green';
                responseMessage.textContent = "תודה על המענה, נפגש על הרחבה!";
                responseMessage.style.display = 'block';

                // ניקוי השדות
                document.getElementById('rsvp-form').reset();
            } else {
                responseMessage.style.color = 'red';
                responseMessage.textContent = "אירעה שגיאה. נסה שוב.";
                responseMessage.style.display = 'block';
            }
        })
        .catch((error) => {
            responseMessage.style.color = 'red';
            responseMessage.textContent = "אירעה שגיאה. נסה שוב.";
            responseMessage.style.display = 'block';
        });
});
