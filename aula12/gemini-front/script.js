// Capta o valor inserido pelo usuário
let inputMessage = document.querySelector("#message")

// Exibe as mensagens do usuário e da IA
let chatLog = document.querySelector("#chat-log")


let messages = []

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let messageText = inputMessage.value
    
    let structuredMessage = {
        "role": "user",
        "parts": [{"text": messageText}]
    }

    messages.push(structuredMessage)

    inputMessage.value = ''

    const messageElement = document.createElement("div")
    messageElement.classList.add("message")
    messageElement.classList.add("message--sent")
    messageElement.innerHTML = `
        <div class="message__text">${messageText}</div>
    `

    chatLog.appendChild(messageElement)

    // Requisição para api local
    fetch("http://localhost:3000/sendMessage/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            messages
        })
    })
})