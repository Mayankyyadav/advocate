document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("info-form");
    const lawyersList = document.getElementById("lawyers-list");
    const caseTypeSelect = document.getElementById("case-type");
    const chatInput = document.getElementById("chat-input");
    const sendChatBtn = document.getElementById("send-chat-btn");
    const chatLog = document.getElementById("chat-log");
    const lawyerDetailsSection = document.getElementById("lawyer-details");

    let currentLawyerId = null;
    let chatMessages = [];

    const lawyers = [
        { id: 1, name: "Wolverine", caseType: "criminal" },
        { id: 2, name: "Iron Man", caseType: "civil" },
        { id: 3, name: "Deadpool", caseType: "family" },
        { id: 4, name: "Spider Man", caseType: "immigration" },
        { id: 5, name: "Dare Devil", caseType: "criminal" },
        { id: 6, name: "Venom", caseType: "civil" },
    ];

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedCaseType = caseTypeSelect.value;

        lawyersList.innerHTML = "";

        const filteredLawyers = lawyers.filter(function(lawyer) {
            return lawyer.caseType === selectedCaseType;
        });

        filteredLawyers.forEach(function(lawyer) {
            const listItem = document.createElement("li");
            listItem.textContent = `${lawyer.name} (${lawyer.caseType})`;
            listItem.dataset.lawyerId = lawyer.id;
            lawyersList.appendChild(listItem);
        });

        Array.prototype.forEach.call(lawyersList.children, function(listItem) {
            listItem.addEventListener("click", function() {
                currentLawyerId = parseInt(listItem.dataset.lawyerId, 10);
                displayLawyerDetails(currentLawyerId);
            });
        });
    });

    sendChatBtn.addEventListener("click", function() {
        const message = chatInput.value.trim();
        if (message !== "") {
            sendChatMessage(currentLawyerId, message);
            chatInput.value = "";
        }
    });

    function displayLawyerDetails(lawyerId) {
        const lawyerDetails = getLawyerDetails(lawyerId);
        lawyerDetailsSection.innerHTML = `
            <h2>Lawyer Details</h2>
            <p>Name: ${lawyerDetails.name}</p>
            <p>Case Type: ${lawyerDetails.caseType}</p>
            <div class="chat-container">
                <h3>Chat with Lawyer</h3>
                <input type="text" id="chat-input" placeholder="Type a message...">
                <button id="send-chat-btn">Send</button>
                <ul id="chat-log">
                    ${chatMessages.map(function(message) {
                        return `<li>${message}</li>`;
                    }).join("")}
                </ul>
            </div>
        `;
        bindChatEvents();
    }

    function getLawyerDetails(lawyerId) {
        return lawyers.find(function(lawyer) {
            return lawyer.id === lawyerId;
        });
    }

    function sendChatMessage(lawyerId, message) {
        chatMessages.push(`Client: ${message}`);
        updateChatLog();

        setTimeout(function() {
            const lawyerResponse = `Lawyer ${getLawyerDetails(lawyerId).name}: Thank you for your message!`;
            chatMessages.push(lawyerResponse);
            updateChatLog();
        }, 1000);
    }

    function updateChatLog() {
        chatLog.innerHTML = chatMessages.map(function(message) {
            return `<li>${message}</li>`;
        }).join("");
    }

    function bindChatEvents() {
        const newChatInput = document.getElementById("chat-input");
        const newSendChatBtn = document.getElementById("send-chat-btn");

        newSendChatBtn.addEventListener("click", function() {
            const message = newChatInput.value.trim();
            if (message !== "") {
                sendChatMessage(currentLawyerId, message);
                newChatInput.value = "";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const lawyersList = document.getElementById("lawyers-list");
    lawyersList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        const lawyerId = event.target.dataset.lawyerId;
        window.location.href = `lawyer-${lawyerId}.html`;
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const caseTypes = document.querySelectorAll(".case-type");
    const lawyersList = document.getElementById("lawyers-list");

    caseTypes.forEach(caseType => {
        caseType.addEventListener("mouseover", function() {
            this.querySelector(".case-type-details").style.display = "block";
        });

        caseType.addEventListener("mouseout", function() {
            this.querySelector(".case-type-details").style.display = "none";
        });
    });
});