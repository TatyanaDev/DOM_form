"use strict";

const array = [];
const form = document.getElementById("root-form");
const list = document.getElementById("root-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      todo: { value },
    },
  } = e;
  const inputValue = value.trim();

  //Валидация значения в инпуте при фабмите формы

  if (inputValue) {
    //При каждом сабмите формы - пушить значение инпута в массив

    array.push(inputValue);

    //Очищать форму после каждого сабмита

    target.reset();

    // Рендерить на странице то, что было введено в форму

    const li = createListElement(inputValue);
    list.append(li);
  }
});

function createListElement(inputValue) {
  const li = document.createElement("li");
  const liContent = document.createTextNode(inputValue);

  li.append(liContent, createDeleteButton(deleteHandler.bind(li), inputValue));
  return li;
}

function createDeleteButton(onDelet, inputValue) {
  const btn = document.createElement("button");
  btn.dataset.value = inputValue;
  btn.textContent = "X";
  btn.addEventListener("click", onDelet);
  return btn;
}

//кнопка удаления у li - удаляет элемент со строки и его значение из массива

function deleteHandler(e) {
  const {
    target: {
      dataset: { value },
    },
  } = e;
  this.remove();
  state.splace(state.indexOf(value), 1);
}
