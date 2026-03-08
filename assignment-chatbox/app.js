let messages = [];

const escapeHtml = (value) => {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
};

const messageTemplate = (message, activeUser) => {
    const isSender = message.sender === activeUser;
    const sideClass = isSender ? "sender-left" : "reply-right";

    return `
        <div class="chat-box ${sideClass}">
            <div class="avatar">${escapeHtml(message.sender.charAt(0).toUpperCase())}</div>
            <div class="user-chat">
                <p class="text">${escapeHtml(message.message)}</p>
                <p>${escapeHtml(message.timestamp)}</p>
            </div>
        </div>
    `;
};

const loadMessages = () => {
    const chatOne = document.getElementById("chat-1");
    const chatTwo = document.getElementById("chat-2");
    const chatOneMessagesArea = chatOne.querySelector(".messages-area");
    const chatTwoMessagesArea = chatTwo.querySelector(".messages-area");

    const chatOneHtml = messages
        .map((message) => messageTemplate(message, "Mumammad"))
        .join("");

    const chatTwoHtml = messages
        .map((message) => messageTemplate(message, "Hussain"))
        .join("");

    chatOneMessagesArea.innerHTML = chatOneHtml;
    chatTwoMessagesArea.innerHTML = chatTwoHtml;
};

loadMessages();

function submitform(chatId, e) {
    e.preventDefault();

    const form = e.target;
    const message = form.messageinput.value.trim();

    if (!message) {
        return;
    }

    const now = new Date();
    const timestamp = now.toTimeString().slice(0, 5);
    const sender = chatId === "chat-1" ? "Mumammad" : "Hussain";

    messages.push({
        id: messages.length + 1,
        sender,
        chatId,
        message,
        timestamp
    });

    loadMessages();
    form.reset();
}