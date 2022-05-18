const buttons = document.querySelectorAll('.profile-selection');

console.log(buttons);

const activateClickedButton = (button) => {
  buttons.forEach(b => b.classList.remove('active'))
  button.classList.add('active')
}

function activateChosenTime () {
  const dailySelection = document.querySelectorAll('.time-card-daily');
  var daily = document.getElementById("daily");

  const weeklySelection = document.querySelectorAll('.time-card-weekly');
  var weekly = document.getElementById("weekly");

  const monthlySelection = document.querySelectorAll('.time-card-monthly');
  var monthly = document.getElementById("monthly");

  const timeCard = document.querySelectorAll('.time-card-times');

  timeCard.forEach(t => t.classList.remove('time-card-show'));

  if (daily.classList.contains('active')) {
    dailySelection.forEach(b => b.classList.add('time-card-show'));
  }

  else if (weekly.classList.contains('active')) {
    weeklySelection.forEach(b => b.classList.add('time-card-show'));
  }

  else if (monthly.classList.contains('active')) {
    monthlySelection.forEach(b => b.classList.add('time-card-show'));
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    activateClickedButton(button);
    activateChosenTime();
  })
})