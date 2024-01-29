var selectedTime = null;

function selectTime(timeId) {
    if (selectedTime) {
        document.getElementById(selectedTime).classList.remove('active');
    }
    document.getElementById(timeId).classList.add('active');
    selectedTime = timeId;
}

function submitForm() {
    if (selectedTime) {
        console.log('Выбранное время:', document.getElementById(selectedTime).innerText);
    } else {
        console.log('Время не выбрано');
    }
}