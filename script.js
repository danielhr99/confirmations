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
    fetch("https://script.google.com/macros/s/AKfycbzgDwSrNXVELnq5WpT21vJ_RHrdGBTvz8DK78-xQVmWdgFnltMu81-W670_CxqZv74Q/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `phone=${phone}&guests=${guests}`,
    })
        .then((response) => response.text())
        .then((data) => {
            if (data === "Success") {
                responseMessage.style.color = 'green';
                responseMessage.textContent = "תודה על המענה, נפגש על הרחבה!";
                responseMessage.style.display = 'block';
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
