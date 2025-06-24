document.getElementById("fortune-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    getFortune();
});

function getZodiac(month, date) {
    month = parseInt(month);
    date = parseInt(date);
    if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
        return "♑ Capricorn";
    } else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
        return "♒ Aquarius";
    } else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
        return "♓ Pisces";
    } else if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
        return "♈ Aries";
    } else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
        return "♉ Taurus";
    } else if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
        return "♊ Gemini";
    } else if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
        return "♋ Cancer";
    } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
        return "♌ Leo";
    } else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
        return "♍ Virgo";
    } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
        return "♎ Libra";
    } else if ((month === 10 && date >= 23) || (month === 11 && date <= 21)) {
        return "♏ Scorpio";
    } else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {
        return "♐ Sagittarius";
    } else {
        console.log("??");
        return "Unknown zodiac!?";
    }
}

function getFortune() {
    const month = document.getElementById("month").value;
    const date = document.getElementById("date").value;
    const fortuneSection = document.getElementById("fortune");
    console.log("Month: ", month, "Date:", date);

    // Input verification
    const maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const parsedMonth = parseInt(month);
    const parsedDate = parseInt(date);
    if (isNaN(parsedMonth) || isNaN(parsedDate) || parsedMonth < 1 || parsedMonth > 12 || parsedDate < 1 || parsedDate > maxDays[parsedMonth - 1]) {
        fortuneSection.style.display = "block";
        fortuneSection.className = "error";
        fortuneSection.innerHTML = `
        <div>
            <h2>Invalid Input!</h2>
            <p>Please input a valid date.</p>
        </div>
        `;
        console.log("Invalid input detected.");
        return;
    }

    const zodiac = getZodiac(month, date);

    const fortunes = [
        "Today is your lucky day, seize every opportunity!",
        "A new adventure awaits you, be ready to explore.",
        "Challenges may arise, but your resilience will shine.",
        "Love is in the air, keep your heart open.",
        "Financial stability is on the horizon, stay prudent.",
        "A kind gesture will bring unexpected rewards.",
        "Trust your intuition, it will guide you well.",
        "Hard work today will pay off tomorrow.",
        "A friend will offer valuable advice, listen closely.",
        "Take a moment to relax, balance is key.",
        "Unexpected news will brighten your day.",
        "Stay cautious, small obstacles may appear.",
        "Your creativity will lead to exciting outcomes.",
        "A long-awaited goal is within reach, keep pushing.",
        "Harmony will prevail in your relationships.",
        "Be patient, good things are coming your way.",
        "A bold decision will open new doors.",
        "Avoid conflicts, diplomacy is your strength today.",
        "Your confidence will inspire those around you.",
        "A small risk could lead to big rewards.",
        "Focus on self-care, your energy needs recharging.",
        "An old friend may reconnect, cherish the moment.",
        "Stay organized, clarity will boost your success.",
        "A creative project will gain recognition soon.",
        "Beware of distractions, stay focused on your goals.",
        "A surprise gift or gesture will lift your spirits.",
        "Your determination will overcome any challenge.",
        "Take time to reflect, wisdom comes from within.",
        "A new skill you learn will prove valuable.",
        "Stay humble, your kindness will be appreciated.",
        "An opportunity for growth is just around the corner.",
        "Avoid impulsive decisions, think things through.",
        "Your optimism will attract positive energy.",
        "A family member will share joyful news.",
        "Stay adaptable, change is coming your way.",
        "Your efforts will be recognized, keep it up!",
        "A moment of courage will lead to success.",
        "Be mindful of your words, they carry weight today.",
        "A financial opportunity may arise, evaluate carefully.",
        "Your patience will be tested, but you'll prevail.",
        "A romantic encounter could spark excitement.",
        "Stay true to your values, they will guide you.",
        "A small act of kindness will make a big difference.",
        "Your hard work will soon yield tangible results.",
        "Avoid overthinking, trust the process.",
        "A new connection will enrich your life.",
        "Stay grounded, balance will bring peace.",
        "Your leadership will shine in a group setting.",
        "A past effort will bring rewards today.",
        "Embrace change, it will lead to growth."
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    const today = new Date();
    const monthToday = today.getMonth(); 
    const dateToday = today.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    fortuneSection.style.display = "block";
    fortuneSection.className = "success";
    fortuneSection.innerHTML = `
    <div>
    <h2>${zodiac}</h2>
    <h3>Your Fortune on ${monthNames[monthToday]} ${dateToday}</h3>
    <p><strong>Fortune:</strong> ${randomFortune}</p>
    </div>
    `;
    console.log("Zodiac: ", zodiac);
    console.log("Fortune displayed: ", randomFortune);
}

document.addEventListener("DOMContentLoaded", function() {
    const scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
        if (script.textContent.includes("WebSocket") && script.textContent.includes("LiveServer")) {
            script.parentNode.removeChild(script);
        }
    }
});