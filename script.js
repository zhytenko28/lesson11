function showText(text) {
  document.getElementById("text").textContent = text;
}

function init() {
  var arrText = [{
      id: "email",
      text: "Your e-mail address"
    },
    {
      id: "name",
      text: "Your full name"
    },
    {
      id: "age",
      text: "Your age (you must be over 16)"
    }
  ];

  for (var i = 0; i < arrText.length; i++) {
    var item = arrText[i];
    document.getElementById(item.id).onfocus = function () {
      showText(item.text);
    };
  }
}

init();
