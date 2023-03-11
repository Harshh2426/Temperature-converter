let cel = document.getElementById("celsius");
let far = document.getElementById("faren");
let formula = document.getElementById("demo");

cel.addEventListener("input", function () {
  let x = this.value;
  let y = (x * 9) / 5 + 32;
  far.value = y;
  formula.innerHTML = `Formula : (${x}&#176C &times 9/5) + 32 = ${y}&#176F`;
});
far.addEventListener("input", function () {
  let x = this.value;
  let y = ((x - 32) * 5) / 9;
  cel.value = y;
  formula.innerHTML = `Formula : (${x}&#176F - 32) &times 5/9 = ${y}&#176C`;
});
