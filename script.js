// Load name from URL if available
window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get('name');
  if (userName) {
    document.getElementById("name").textContent = decodeURIComponent(userName);
  }
};

// Update name and refresh URL
function updateName() {
  const inputName = document.getElementById("inputName").value.trim();
  if (inputName !== "") {
    const encoded = encodeURIComponent(inputName);
    const newUrl = `${window.location.origin}${window.location.pathname}?name=${encoded}`;
    window.location.href = newUrl;
  } else {
    alert("कृपया नाम दर्ज करें!");
  }
}

// Share functions
function shareWhatsApp() {
  const name = document.getElementById("name").textContent;
  const link = window.location.href;
  const message = `🌟 जय जगन्नाथ! शुभ रथ यात्रा 2025\nसप्रेम: ${name}\n👇 अपना मैसेज बनाए:\n${link}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

function shareTelegram() {
  const name = document.getElementById("name").textContent;
  const link = window.location.href;
  const message = `🌟 जय जगन्नाथ! शुभ रथ यात्रा 2025\nसप्रेम: ${name}\n👇 अपना मैसेज बनाए:\n${link}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, "_blank");
}

function shareFacebook() {
  const link = window.location.href;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
  window.open(fbUrl, "_blank");
}

function copyLink() {
  const link = window.location.href;
  navigator.clipboard.writeText(link).then(() => {
    alert("🔗 लिंक कॉपी हो गया! अब आप कहीं भी पेस्ट कर सकते हैं।");
  });
}

// Click to play bhajan (browser restriction bypass)
window.addEventListener('click', () => {
  const audio = new Audio('bhakti.mp3');
  audio.loop = true;
  audio.play();
}, { once: true });

function createFlower() {
  const flowerEmojis = ['🌸', '🌼', '🌺'];
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.fontSize = Math.random() * 20 + 10 + 'px';
  document.querySelector('.flower-container').appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}


setInterval(createFlower, 500);
setTimeout(() => {
  alert("🔊 कृपया स्क्रीन पर क्लिक करें भजन शुरू करने के लिए 🙏");
}, 1000);
function updateCountdown() {
  const targetDate = new Date("June  27, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerText = "🚩 रथ यात्रा शुरू हो चुकी है!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerText = 
    `${days} दिन ${hours} घंटे ${mins} मिनट ${secs} सेकंड`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();
