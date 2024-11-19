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


fetch("https://script.googleusercontent.com/macros/echo?user_content_key=a4OGktoKHkryS6rEAy2MjJoYEFosxRL9stgzASpOuFtM50DZTBisIqjTiX4toPCLdBFqOtFdfU_TKs-qp3_tsrybcpBOa0p1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDbQcdmA4g6lcSQ44Z80x5n_r87IxuJePa6ng9h8BZU_MGBC1tL2veoWQN4vw1bDnoV1DK5yFsqbwm28H6SIs1N7qroWavlf0g&lib=MeEesZBY6tb6j1JOvRFREC9oOYNoxojT-", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `phone=${phone}&guests=${guests}`,
})
