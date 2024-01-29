document.addEventListener('DOMContentLoaded', function() {
    var seats = document.querySelectorAll('td');
  
    seats.forEach(function(seat) {
      seat.addEventListener('click', function() {
        this.classList.toggle('selected');
      });
    });
  });
  