let time = new Date();
let hours, minutes, seconds, secHand, minHand, hourHand;

let checkbox = document.querySelector(".checkbox");
let clocks = document.querySelectorAll('.clocks');
let timeDifference = [[0, 0], [9, 30], [4, 30], [2, 30]]

function setTime(){
  clocks.forEach((clock, index) => {
     clock.hours = (time.getHours() - timeDifference[index][0] )% 12;
     clock.minutes = (time.getMinutes()- timeDifference[index][1]);
     clock.seconds = time.getSeconds();
  
     clock.secHand = clock.querySelector('.second')
     clock.minHand = clock.querySelector('.minute')
     clock.hourHand = clock.querySelector('.hour')
    
  })
}

function updateTime(){
  clocks.forEach(clock => {
      if(clock.seconds > 59){
        clock.seconds = 0;
        clock.minutes++;
    }
    if(clock.minutes > 59){
      clock.minutes = 0;
      clock.hours++;
    }
    if(clock.hours > 12){
      clock.hours = hours%12;
    }

    clock.secHand.style.transform = `rotate(${clock.seconds*6}deg)`;
    clock.minHand.style.transform = `rotate(${clock.minutes*6}deg)`;
    clock.hourHand.style.transform = `rotate(${clock.hours*30}deg)`;
    clock.seconds++;
  })
    
}
setTime();
setInterval(updateTime, 1000);


function displayClock(){
  let checkboxes = checkbox.querySelectorAll("input");
  checkboxes.forEach((checkbox, index) => {
    if(checkbox.checked){
      // clocks[index].style.opacity = "1";
      clocks[index].style.display = "block";  // transition is not working on display property

    }else{
      // clocks[index].style.opacity = "0";
      clocks[index].style.display = "none";

    }
  })
}

let dropdownBtn = document.querySelector('.dropdown-btn button');
dropdownBtn.addEventListener('click', showCheckboxes);

function showCheckboxes() {
  if (checkbox.style.visibility == "visible") {
    checkbox.style.visibility = "hidden";
  } else {
    checkbox.style.visibility = "visible";
  }
    
  displayClock();
}


