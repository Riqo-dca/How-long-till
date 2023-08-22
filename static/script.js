document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        const timeDiff = Math.abs(endDate - startDate);

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = days * 24;
        const minutes = days * 24 * 60;
        const seconds = days * 24 * 60 * 60;

        resultDiv.innerHTML = `Time between the dates:<br>${days} days<br>or ${hours} hours<br>or ${minutes} minutes<br>or ${seconds} seconds`;
    });
});
