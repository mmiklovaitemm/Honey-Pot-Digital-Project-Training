$(document).ready(function(){
    $(".resources-button").click(function(event){
        event.stopPropagation();
        $(".dropdown-content").toggle();
    });
    $(document).click(function(){
        $(".dropdown-content").hide();
    });
});

// Hide the dropdown by default
$(document).ready(function(){
    $(".dropdown-content").hide();
});

// pasiekiame mygtuko ir dropdown elementus
var button = document.querySelector('.resources-button');
var dropdown = document.querySelector('.dropdown-content');
// pridedame paspaudimo įvykį mygtukui
button.addEventListener('click', function() {

  // Toggle klasės pridėjimą/šalinimą mygtukui
  button.classList.toggle('active');

  // Toggle klasės pridėjimą/šalinimą dropdown'ui
  dropdown.classList.toggle('active');
  
  // Toggle klasės pridėjimą/šalinimą mygtukui, kai dropdown yra aktyvuotas
  if (dropdown.classList.contains('active')) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
});
