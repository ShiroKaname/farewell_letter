function enterSite() {
    const intro = document.getElementById('intro-overlay');
    intro.classList.add('hidden-intro');
    
    // --- UPDATE: Putar Musik saat tombol ditekan ---
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.volume = 0.5; // Set volume 50% agar tidak terlalu keras
        audio.play().catch(error => {
            console.log("Audio autoplay dicegah oleh browser sampai ada interaksi pengguna.");
        });
    }
    
    setTimeout(startTypingLetter, 1000);
}

function startTypingLetter() {
    const textToType = `Dear Keykey,\n\nHalo keykey 👋🏻 \nWah, ga kerasa waktu ternyata lebih cepat dari yang kita kira, tiba-tiba dah di end page. semua canda, cerita, dan moment yang pernah kita lewati akan tetap tinggal sebagai kenangan yang hangat. Mungkin kita akan berpisah sekarang, tapi that moment ga akan pernah tergantikan. Maaf ya keyy, selama ini koko dah buat banyak masalah sampe keykeyy sedih, kita akan berpisah sekarang. koko harap keykey jadi pribadi yang lebih dewasa, koko tau kok jadi anak-anak itu menyenangkan 🙂‍↕️,jadi dewasa itu tak terelakkan. keykey jangan suka marah-marah lagi ya. kalo ada temen baru lagi jangan di jahilin 😊. udah ya keyy, Thanks for everything Keykeyy. koko will remmember all the  moment. miss you 💝✌🏻\n\nJuli 2025 - Maret 2026`;
    
    const outputElement = document.getElementById('letter-content');
    const cursorElement = document.getElementById('cursor');
    const signatureElement = document.getElementById('signature-area');
    const letterBox = document.getElementById('letter-box'); 
    
    cursorElement.style.display = 'inline-block';
    const chars = Array.from(textToType);
    let index = 0;

    function typeChar() {
        if (index < chars.length) {
            const char = chars[index];
            if (char === '\n') {
                outputElement.innerHTML += '<br>';
            } else {
                outputElement.innerHTML += char;
            }
            index++;
            
            // Auto scroll di dalam kotak surat
            letterBox.scrollTop = letterBox.scrollHeight;

            const speed = Math.random() * 30 + 30; 
            setTimeout(typeChar, speed);
        } else {
            cursorElement.style.display = 'none'; 
            signatureElement.style.display = 'block'; 
        }
    }
    typeChar();
}

// --- LOGIC SPARKLE BACKGROUND ---
const sparkleBgContainer = document.getElementById('sparkle-bg-container');
function createBgSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle-bg');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    const size = Math.random() * 32 + 8 + 'px'; 
    sparkle.style.width = size;
    sparkle.style.height = size;
    const duration = Math.random() * 1.5 + 0.5 + 's';
    sparkle.style.animationDuration = duration;
    sparkleBgContainer.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 2000);
}
setInterval(createBgSparkle, 300);

// --- LOGIC AWAN ---
const cloudContainer = document.getElementById('cloud-container');
const cloudChars = ['☁️', '☁️', '⛅'];
function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.textContent = cloudChars[Math.floor(Math.random() * cloudChars.length)];
    cloud.style.left = '-150px';
    cloud.style.top = Math.random() * 50 + 'vh'; 
    const scale = Math.random() * 1.5 + 0.8;
    cloud.style.fontSize = (70 * scale) + 'px';
    const duration = Math.random() * 20 + 20 + 's';
    cloud.style.animationDuration = duration;
    cloudContainer.appendChild(cloud);
    setTimeout(() => { cloud.remove(); }, 41000);
}
setInterval(createCloud, 6000);
for(let i=0; i<3; i++) setTimeout(createCloud, i*2000);

// --- LOGIC HUJAN ---
const rainContainer = document.getElementById('rain-container');
const rainItems = [
    { type: 'image', src: 'https://files.catbox.moe/0qaheu.png', baseSize: 80 },
    { type: 'image', src: 'https://files.catbox.moe/ye9y48.png', baseSize: 75 },
    { type: 'image', src:'https://files.catbox.moe/vqs7gh.png', baseSize: 70 },
    { type: 'emoji', char: '🍦', baseSize: 25 },
    { type: 'emoji', char: '🍭', baseSize: 20 },
    { type: 'emoji', char: '🫧', baseSize: 30 },
    { type: 'emoji', char: '🧁', baseSize: 20 },            
];

function createRain() {
    const el = document.createElement('div');
    el.classList.add('rain-item');
    const randomItem = rainItems[Math.floor(Math.random() * rainItems.length)];
    const sizeMultiplier = Math.random() * 0.8 + 0.6; 
    const finalSize = randomItem.baseSize * sizeMultiplier;

    if (randomItem.type === 'image') {
        el.style.width = finalSize + 'px';
        el.style.height = finalSize + 'px';
        el.style.backgroundImage = `url('${randomItem.src}')`;
        el.style.backgroundSize = 'contain';
        el.style.backgroundRepeat = 'no-repeat';
    } else {
        el.textContent = randomItem.char;
        el.style.fontSize = finalSize + 'px';
        el.style.filter = 'drop-shadow(0 4px 4px rgba(0,0,0,0.1))';
    }
    el.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 4 + 5 + (sizeMultiplier * 2); 
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = Math.random() * 2 + 's';
    rainContainer.appendChild(el);
    setTimeout(() => { el.remove(); }, (duration * 1000) + 3000);
}

setInterval(createRain, 600);
for(let i=0; i<10; i++) setTimeout(createRain, Math.random() * 3000);
