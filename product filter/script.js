import products from "./product.js";

const select = document.querySelector("#catagory");

const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const selectCategory = (e) => {
  const selectedIndex = e.target.options.selectedIndex;
  const value = e.target.options[selectedIndex].value;

  const filtered = products.data.filter((product) => {
    return product.category === value;
  });

  removeItems();
  filtered.forEach((product) => {
    createItem(product);
  });
};

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const src = document.createAttribute("src");
  const div = document.createElement("div");
  const check = document.createElement("input");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");

  li.id = product.id;

  src.value = product.img;
  img.setAttributeNode(src);

  h3.innerText = product.name;
  h3.className = "name";

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  check.setAttribute("type", "checkbox");

  div.append(check, h3, span);
  li.append(img, div);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

importData();

select.addEventListener("change", selectCategory);
