let original_text = document.getElementById("des").innerHTML;
function content() {
  document.getElementById("des").innerHTML =
    "Line changed after clicking button";
}

function reset() {
  document.getElementById("des").innerHTML = original_text;
}
