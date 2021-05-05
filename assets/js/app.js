const sendBtn = document.querySelector(".send");
const inputVal = document.querySelector(".textmessage");
const area = document.querySelector(".message-area");
sendBtn.addEventListener("click", () => {
  sendMessage();
});

let sendMessage = () => {
  if (inputVal.value == "") {
    alert("You should type some message...");
  } else {
    const textArea = ` <div class="my-message message">${inputVal.value}</div>`;
    area.innerHTML += textArea;
    inputVal.value = "";
  }
};

inputVal.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    sendMessage();
  }
});
