let number = document.querySelectorAll(".number");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let dot = document.querySelector(".dot");

let resoult = 0;
let minus = "-";
const operators = document.querySelectorAll(".operator");
console.log(operators);
const clear = document.querySelector(".clear");
const pozNeg = document.querySelector(".pozNeg");
pozNeg.addEventListener("click", () => {
  if (!second.textContent || !second.textContent.includes("-")) {
    if (second.textContent.startsWith("-")) {
      second.textContent.replace("-");
    } else {
      second.textContent = minus.concat(second.textContent);
    }
  }
});

dot.addEventListener("click", () => {
  if (!second.textContent.includes(".")) {
    second.textContent += ".";
  }
});
clear.addEventListener("click", () => {
  first.textContent = "";
  second.textContent = "";
});
for (let i in number) {
  number[i].onclick = () => {
    console.log(resoult, typeof resoult);
    if (parseFloat(second.textContent) !== resoult) {
      second.textContent += number[i].textContent;
    }
  };
}
for (let i of operators) {
  i.addEventListener("click", () => {
    if (!second.textContent) {
      second.textContent = "";
    } else {
      first.textContent += second.textContent + i.textContent;

      second.textContent = "";
    }
  });
}

document.querySelector(".equal").addEventListener("click", () => {
  if (second.textContent) {
    first.textContent += second.textContent;

    resoult = eval(first.textContent);

    first.textContent = "";

    second.textContent = resoult.toFixed(2);
  }
});
