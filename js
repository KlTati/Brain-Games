// тут в переменные мы записали наши кнопки.
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
// получаем в переменную нашу форму и все данные которые в ней есть.
// подробнее можно посмотреть тут https://learn.javascript.ru/form-elements
const caloriesForm = document.forms.counter;

// span с калориями
const normalCal = document.querySelector(".normal_cal");

caloriesForm.gender.addEventListener('input', validateForm); 

function validateForm() {
  // Проверяем, выбрано ли значение в радио-кнопках
  let check1 = false;
  let check2 = false;
  let check3 = false;
  for (const a of gender) {
    if (a.checked) {
      check1 = true;
      break;
    }
  }
  for (const a of activity) {
    if (a.checked) {
      check2 = true;
      break;
    }
  }
  if (!check1) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}
