const form = document.querySelector("form");
const memoInput = document.querySelector(".memoInput");
const ul = document.querySelector("ul");

const removeLocal = (memo) => {
  let memos = [];
  if (localStorage.getItem("memos") == null) {
    memos = [];
  } else {
    memos = JSON.parse(localStorage.getItem("memos"));
  }

  memos = memos.filter((m) => m.id != memo.id);
  localStorage.setItem("memos", JSON.stringify(memos));
};

const getLocal = () => {
  let memos = [];
  if (localStorage.getItem("memos") == null) {
    memos = [];
  } else {
    memos = JSON.parse(localStorage.getItem("memos"));
  }

  memos.forEach((memo) => {
    const li = document.createElement("li");
    const checkBox = document.createElement("div");
    const i = document.createElement("i");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.id = memo.id;
    checkBox.className = "checkBox";
    i.className = "fa-solid fa-check";
    p.innerText = memo.text;
    button.innerText = "삭제";
    button.className = "delete";

    checkBox.appendChild(i);
    li.append(checkBox, p, button);
    ul.appendChild(li);
  });
};

const saveToLocal = (memo) => {
  let memos = [];
  if (localStorage.getItem("memos") == null) {
    memos = [];
  } else {
    memos = JSON.parse(localStorage.getItem("memos"));
  }

  memos.push(memo);
  localStorage.setItem("memos", JSON.stringify(memos));
};

const addMemo = (e) => {
  e.preventDefault();
  if (memoInput.value !== "") {
    const li = document.createElement("li");
    const checkBox = document.createElement("div");
    const i = document.createElement("i");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.id = Date.now();
    checkBox.className = "checkBox";
    i.className = "fa-solid fa-check";
    p.innerText = memoInput.value;
    button.innerText = "삭제";
    button.className = "delete";

    checkBox.appendChild(i);
    li.append(checkBox, p, button);
    ul.appendChild(li);

    const memo = {
      id: li.id,
      text: memoInput.value,
    };

    saveToLocal(memo);
    memoInput.value = "";
  } else {
    alert("내용을 입력해 주세요!");
  }
};

const manageTodo = (e) => {
  const btn = e.target;

  if (btn.className == "fa-solid fa-check") {
    btn.parentElement.classList.toggle("active");
    btn.parentElement.nextSibling.classList.toggle("ch");
  } else if (btn.className == "delete") {
    const memo = btn.parentElement;
    removeLocal(memo);
    memo.remove();
  }
};

const removeBtn = document.querySelector("button");

document.addEventListener("DOMContentLoaded", getLocal);
form.addEventListener("submit", addMemo);
ul.addEventListener("click", manageTodo);
