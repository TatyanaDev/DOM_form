"use strict";

//Валидация значения в инпуте при фабмите формы
//кнопка удаления у li - удаляет элемент со строки и его значение из массива

const array = [];
const form = document.getElementById("root-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: { email },
  } = e;
  console.dir(email.value);

//При каждом сабмите формы - пушить значение инпута в массив

  array.push(email.value);

  //Очищать форму после каждого сабмита

  document.getElementById("root-form").reset();

//Рендерить на странице то, что было введено в форму

  // const li = create(email.value);
});

function create(i) {
  const li = document.createElement("li");
  li.append(i);
  return li;
}
