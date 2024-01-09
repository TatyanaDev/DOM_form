"use strict";

const form = document.getElementById("form");
const list = document.getElementById("list");
const values = [];

function deleteHandler() {
  this.remove();
}

const addDeleteButton = (onDelete, value) => {
  const button = document.createElement("button");

  button.dataset.value = value;
  button.textContent = "X";
  button.addEventListener("click", onDelete);

  return button;
};

const addListElement = (value) => {
  const li = document.createElement("li");
  const liContent = document.createTextNode(value);

  li.append(liContent, addDeleteButton(deleteHandler.bind(li), value));

  return li;
};

//кнопка удаления у li - удаляет элемент со строки и его значение из массива

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = event.target.input.value.trim();

  //Валидация значения в инпуте при фабмите формы

  if (value) {
    //При каждом сабмите формы - пушить значение инпута в массив

    values.push(value);

    //Очищать форму после каждого сабмита

    event.target.reset();

    // Рендерить на странице то, что было введено в форму

    const li = addListElement(value);

    list.append(li);
  }
});
