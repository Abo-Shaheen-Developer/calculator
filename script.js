const display = document.querySelector(".D-input");

// الأزرار
const buttons = document.querySelectorAll(
  ".button, .buttonD, .buttonE, .buttonZ, .buttonN, .buttonDEL, .button11, .buttonAC"
);

let expression = "";

// تحسين شكل الشاشة
display.style.padding = "10px";
display.style.boxSizing = "border-box";
display.style.fontSize = "40px";
display.style.display = "flex";
display.style.alignItems = "center";
display.style.justifyContent = "flex-end";
display.style.overflow = "hidden";
display.style.wordBreak = "break-all";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();

    // AC
    if (btn.classList.contains("buttonAC")) {
      expression = "";
      display.textContent = "";
      return;
    }

    // DEL
    if (btn.classList.contains("buttonDEL")) {
      expression = expression.slice(0, -1);
      display.textContent = expression;
      return;
    }

    // =
    if (btn.classList.contains("button11")) {
      try {
        let result = expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/");

        expression = eval(result).toString();
        display.textContent = expression;
      } catch {
        display.textContent = "Error";
        expression = "";
      }
      return;
    }

    // باقي الأزرار (أرقام + عمليات)
    expression += value;
    display.textContent = expression;
  });
});