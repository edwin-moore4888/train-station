const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
let hours = [];
let minutes = []
for (let i = 1; i < departures.length; i++) {
    hours.push(Math.floor(departures[i]/60));
    minutes.push((departures[i] % 60));

}


const listElement = document.querySelector('ul')

// console.log(hours);
// console.log(minutes);
for (let i = 0; i < hours.length; i++) {
   listElement.innerHTML += (`<li>${hours[i]}:${minutes[i]}</li>`)
}




