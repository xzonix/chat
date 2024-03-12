function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value;
  
  if (message.trim() !== "") {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    
    messageInput.value = "";
  }
}
