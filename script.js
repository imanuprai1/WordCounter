let textbox = document.getElementById("textarea");

textbox.addEventListener("input", function () {
  let text = this.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;

  text = text.trim();
  let words = text.split(" ");
  let cleanWords = words.filter(function (elm) {
    return elm != "";
  });

  document.getElementById("word").innerHTML = cleanWords.length;
});
