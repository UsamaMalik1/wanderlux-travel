function calculateTrip() {

let destination = parseInt(document.getElementById("destination").value);
let travellers = parseInt(document.getElementById("travellers").value);
let days = parseInt(document.getElementById("days").value);
let style = parseFloat(document.getElementById("style").value);

let styleText = document.getElementById("style").options[
    document.getElementById("style").selectedIndex
].text;

let destinationText = document.getElementById("destination").options[
    document.getElementById("destination").selectedIndex
].text;

if(isNaN(travellers) || isNaN(days)) {
    alert("Please enter valid numbers");
    return;
}

let total = destination * travellers * days * style;

document.getElementById("result").innerHTML =
`Estimated cost for ${travellers} travellers to ${destinationText} for ${days} days: $${total} - ${styleText} Travel Package.`;
}


window.addEventListener('scroll', function() {
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
const cardPosition = card.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if(cardPosition < screenPosition) {
card.classList.add('show');
}
});
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function validateForm() {
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;

if(name === '' || email === '') {
alert('Please fill all required fields');
return false;
}

alert('Form submitted successfully');
return true;
}
