document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var selectedFilm = urlParams.get('film');

    if (selectedFilm) {
        // Вывести информацию о выбранном фильме на странице
        document.getElementById('selectedFilm').innerText = selectedFilm;
    }
});
