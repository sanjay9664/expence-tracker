function store(event) {
  event.preventDefault();

  let form = document.getElementById("form");

  let num = form.num.value;

  let des = form.des.value;

  let val = form.data.value;

  //   let li = document.createElement("li");

  //   li.append(num, des, val) + " ";
  //   //   console.log(num, des, val);

  //   document.getElementById("store").append(li);

  var store = new Person(num, des, val);
  arr.push(store);
  localStorage.setItem("form", JSON.stringify(arr));
}

var arr = JSON.parse(localStorage.getItem("form")) || [];
function Person(a, b, c) {
  this.num = a;

  this.des = b;

  this.val = c;
}

console.log(arr);
let div = document.getElementById("expence");
arr.forEach(function (el, index) {
  let div1 = document.createElement("div");

  let num = document.createElement("p");

  num.innerText = `my expencesAmount : ${el.num}`;

  let des = document.createElement("p");

  des.innerText = `my describtionData : ${el.des}`;

  let val = document.createElement("p");

  val.innerText = `my category data : ${el.val}`;

  let btn = document.createElement("button");

  btn.innerText = "Delete";

  btn.addEventListener("click", function () {
    removeItem(el, index);
  });

  let btn2 = document.createElement("button");

  btn2.innerText = "Edit expense";

  btn2.addEventListener("click", function () {
    editItem(el, index);
  });

  div1.append(num, des, val, btn, btn2);

  div.append(div1);
});

function removeItem(el, index) {
  console.log("sanjay");
  arr.splice(1, index);

  localStorage.setItem("form", JSON.stringify(arr));

  window.location.reload();
}

function editItem(el, index) {
  console.log("edit data");
}
