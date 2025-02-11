document.addEventListener("DOMContentLoaded", function () {
    let forgiveButton = document.getElementById("forgiveButton");
    
    forgiveButton.addEventListener("click", function () {
        showPopup();
    });
});

let noClickCount = 0;

function showPopup() {
    // Create the popup container
    let popup = document.createElement("div");
    popup.id = "popup";
    
    // Create popup content
    popup.innerHTML = `
        <div class="popup-content">
            <p>Please forgive me, my love ❤️</p>
            <button id="yesButton">Yes</button>
            <button id="noButton">No</button>
        </div>
    `;

    // Add popup to the body
    document.body.appendChild(popup);

    // Add event listeners to the buttons
    document.getElementById("yesButton").addEventListener("click", function () {
        showLoveMessage();
    });

    document.getElementById("noButton").addEventListener("click", function () {
        noClickCount++;
        if (noClickCount >= 3) {
            document.getElementById("noButton").innerText = "Yes";
        }
    });
}

function showLoveMessage() {
    let popup = document.getElementById("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>I love you! ❤️</p>
            <img src="love-image.jpg" alt="Love">
        </div>
    `;

    // Remove the popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}
