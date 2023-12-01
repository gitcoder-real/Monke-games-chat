<!DOCTYPE html>
<html>
<head>
    <title>Chat</title>
    <style>
        #message-box {
            width: 300px;
            height: 400px;
            border: 1px solid #ccc;
            overflow-y: scroll;
            padding: 10px;
        }
        
        #message-input {
            width: 300px;
        }
        
        #send-button {
            margin-top: 10px;
        }
    </style>
    <script>
        function sendMessage() {
            var messageInput = document.getElementById("message-input");
            var messageBox = document.getElementById("message-box");
            
            var message = messageInput.value;
            if (message.trim() !== "") {
                var messageElement = document.createElement("div");
                messageElement.innerText = message;
                messageBox.appendChild(messageElement);
                
                messageInput.value = "";
                messageBox.scrollTop = messageBox.scrollHeight;
            }
        }
        
        function saveUsername() {
            var usernameInput = document.getElementById("username-input");
            var username = usernameInput.value;
            localStorage.setItem("username", username);
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            var usernameInput = document.getElementById("username-input");
            var savedUsername = localStorage.getItem("username");
            if (savedUsername) {
                usernameInput.value = savedUsername;
            }
        });
    </script>
</head>
<body>
    <input type="text" id="username-input" placeholder="Enter your username">
    <button onclick="saveUsername()">Save Username</button>
    
    <div id="message-box"></div>
    <input type="text" id="message-input" placeholder="Type your message">
    <button id="send-button" onclick="sendMessage()">Send</button>
</body>
</html>
