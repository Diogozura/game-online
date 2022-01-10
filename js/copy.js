export const copy = () => {
    document.getElementById("cp_btn").addEventListener("click", copy_password);
function copy_password(event) {
  event.preventDefault()

  var copyText = document.getElementById("pwd_spn");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}
}


