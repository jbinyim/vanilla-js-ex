const form = document.querySelector("form");
const memoInput = document.querySelector(".memoInput");
const ul = document.querySelector("ul");

const addMemo = (e) => {
  e.preventDefault();
  if (memoInput.value !== "") {
    const li = document.createElement("li");
    const checkBox = document.createElement("div");
    const i = document.createElement("i");
    const p = document.createElement("p");
    const button = document.createElement("button");

    checkBox.className = "checkBox";
    i.className = "fa-solid fa-check";
    p.innerText = memoInput.value;
    button.innerText = "삭제";
    button.className = "delete";

    checkBox.appendChild(i);
    li.append(checkBox, p, button);
    ul.appendChild(li);

    memoInput.value = "";
  }
};

const manageTodo = (e) => {
  const btn = e.target;
  if (btn.className == "fa-solid fa-check") {
    btn.parentElement.classList.toggle("active");
  } else if (btn.className == "delete") {
    btn.parentElement.remove();
  }
};

const removeBtn = document.querySelector("button");

form.addEventListener("click", addMemo);
ul.addEventListener("click", manageTodo);
