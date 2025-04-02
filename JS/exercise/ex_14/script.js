// create a hacking simulator which has green background and it shows these messages with random delay of 10 to 7 seconds
     
//     Initializing Hacking...
//     Reading your file....
//     Password files detected...
//     Sending all passwords and personal files to server....
//     Cleaning up....

//     the three dots must blink so that it looks like a real terminal

// Set green background
document.body.style.backgroundColor = "green";

// Function to display messages with a blinking effect
async function showMessage(message) {
    return new Promise((resolve) => {
        let msgElement = document.createElement("p");
        document.body.appendChild(msgElement);

        let dots = 0;
        msgElement.textContent = message; 

        // Blinking dots effect
        let interval = setInterval(() => {
            dots = (dots + 1) % 4;
            msgElement.textContent = message + ".".repeat(dots);
        }, 500);

        // Random delay between 7 to 10 seconds
        let delay = Math.floor(Math.random() * 3000) + 7000;
        
        setTimeout(() => {
            clearInterval(interval); // Stop blinking effect
            msgElement.textContent = message + "..."; // Final state
            resolve();
        }, delay);
    });
}

// Function to simulate hacking process
async function startHacking() {
    await showMessage("Initializing Hacking");
    await showMessage("Reading your file");
    await showMessage("Password files detected");
    await showMessage("Sending all passwords and personal files to server");
    await showMessage("Cleaning up");

    let doneMessage = document.createElement("p");
    doneMessage.textContent = "Hacking Completed!";
    document.body.appendChild(doneMessage);
}

// Start the hacking simulation
startHacking();
