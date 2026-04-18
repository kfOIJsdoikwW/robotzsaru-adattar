const VALID_CODE = "05010/1142/2026.bü.";
const DEBUG_CODE = "1";

function processLogin() {
    const input = document.getElementById('access-code');
    const msg = document.getElementById('status-msg');
    const container = document.getElementById('main-container');

    if (input.value.trim() === VALID_CODE || input.value.trim() === DEBUG_CODE) {
        msg.innerText = "AZONOSÍTÁS SIKERES...";
        msg.style.color = "var(--success-green)";
        input.style.borderColor = "var(--success-green)";
        
        setTimeout(() => {
            document.getElementById('login-section').classList.add('hidden');
            document.getElementById('loading-screen').classList.remove('hidden');
            document.getElementById('loading-screen').style.display = 'flex';
            
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('evidence-section').classList.remove('hidden');
            }, 2600);
        }, 800);
    } else {
        msg.innerText = "HOZZÁFÉRÉS MEGTAGADVA!";
        msg.style.color = "var(--error-red)";
        container.classList.add('error-shake');
        setTimeout(() => container.classList.remove('error-shake'), 500);
    }
}

function toggleDetails() {
    const details = document.getElementById('personal-data');
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}

function toggleDigitalFiles() {
    const gallery = document.getElementById('digital-gallery');
    gallery.style.display = (gallery.style.display === 'block') ? 'none' : 'block';
}

function accessDenied() {
    const lockedBox = document.getElementById('locked-files');
    const container = document.getElementById('main-container');
    const evidenceTitle = document.querySelector("#evidence-section h2");
    const chatBox = document.getElementById('system-chat');
    const chatMsg = document.getElementById('chat-message');

    // 1. Pirosra váltás
    lockedBox.style.borderColor = "var(--error-red)";
    lockedBox.style.color = "var(--error-red)";
    lockedBox.style.background = "rgba(255, 0, 0, 0.1)";
    evidenceTitle.style.color = "var(--error-red)";
    evidenceTitle.style.borderColor = "var(--error-red)";

    // 2. Chatbox megjelenítése és üzenet beírása
    chatBox.classList.remove('hidden');
    chatMsg.innerText = "RENDSZERÜZENET: Jogosultság megtagadva. (Err. #0012)";
    chatMsg.style.color = "var(--error-red)";

    // 3. Rázkódás
    container.classList.add('error-shake');
    setTimeout(() => container.classList.remove('error-shake'), 500);

    // 4. Visszaállítás 3 másodperc múlva
    setTimeout(() => {
        lockedBox.style.borderColor = "var(--police-blue)";
        lockedBox.style.color = "var(--police-blue)";
        lockedBox.style.background = "rgba(0,0,0,0.5)";
        
        evidenceTitle.style.color = "var(--police-blue)";
        evidenceTitle.style.borderColor = "var(--police-blue)";
        
        chatBox.classList.add('hidden');
    }, 10000);
}
