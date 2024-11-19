document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault(); // מונע רענון של הדף

    const phone = document.getElementById('phone').value.trim();
    const guests = document.getElementById('guests').value.trim();
    const responseMessage = document.getElementById('response-message');

    // איפוס הודעה קיימת
    responseMessage.style.display = 'none';
    responseMessage.textContent = "";

    // בדיקת שדות
    if (!phone) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = "יש להזין מספר פלאפון.";
        responseMessage.style.display = 'block'; // הצגת ההודעה
        return;
    }

    if (!guests) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = "יש להזין כמות מגיעים.";
        responseMessage.style.display = 'block'; // הצגת ההודעה
        return;
    }

    // הודעת הצלחה
    responseMessage.style.color = 'green';
    responseMessage.textContent = "תודה על המענה, נפגש על הרחבה!";
    responseMessage.style.display = 'block'; // הצגת ההודעה
});
