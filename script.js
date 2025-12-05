function calcPrice() {
  const type = parseFloat(document.getElementById("type").value);
  const meters = parseFloat(document.getElementById("meters").value);

  if (isNaN(meters) || meters <= 0) {
    alert("אנא הזן מספר תקין של מטרים");
    return;
  }

  const price = type * meters;
  document.getElementById(
    "result"
  ).innerText = `המחיר המשוער: ${price.toLocaleString()} ₪`;
}
