function sendMessage() {
    let userInput = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");
    
    if (userInput.value.trim() === "") {
        return;
    }
    
    // User message chupinchu
    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = userInput.value;
    chatBox.appendChild(userDiv);
    
    // Bot reply
    let botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    
    let text = userInput.value.toLowerCase();
    if (text === "hi") {
        botDiv.textContent = "Hello! How can I assist you?";
    } else if (text === "bye") {
        botDiv.textContent = "Goodbye! Have a great day!";
    } else if (text === "how are you") {
        botDiv.textContent = "I'm a bot, but I'm doing great!";
    } else {
        botDiv.textContent = "You said: " + userInput.value;
    }
    
    setTimeout(function() {
        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
    
    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key tho pampadaniki
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});