let btn = document.querySelector("#btn");

let input = document.querySelector("#input");
let valorTotal;

input.addEventListener("input", (e) => {
  let vError = document.querySelector("#advertensing");

  let actual = e.target.value;

  if (isNaN(actual)) {
    return (vError.innerHTML = `CANNOT BE A STRING <span class="iconify-inline" data-icon="clarity:error-line" data-width="50" data-height="50"></span>`);
  }

  actual.length > 8
    ? (vError.textContent = "CANNOT EXCEED EIGHT NUMBERS")
    : (vError.textContent = "");

  return (valorTotal = actual);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector("#result").textContent = parseInt(valorTotal, 2);
});
/*  */
