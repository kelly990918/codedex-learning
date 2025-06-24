let month = 7;
let horoscope = "";
let fortune = "";
let randomNumber = Math.floor(Math.random() * 2) + 1;

if (month == 1) {
    horoscope = "♑ Capricon";
    if (randomNumber === 1) {
        fortune = "A great opportunity will soon knock on your door—be ready to answer.";
    } else {
        fortune = "A hidden talent within you stirs—nurture it, and it will bloom.";
    }
} else if (month == 2) {
    horoscope = "♒ Aquarius";
    if (randomNumber === 1) {
        fortune = "The stars align in your favor, but patience will be your greatest ally.";
    } else {
        fortune = "The moon warns of restless nights ahead; seek peace in stillness.";
    }
} else if (month == 3) {
    horoscope = "♓ Pisces";
    if (randomNumber === 1) {
        fortune = "A friend’s loyalty will be tested, revealing their true heart.";
    } else {
        fortune = "A shadow from your past may reappear, seeking closure or chaos.";
    }
} else if (month == 4) {
    horoscope = "♈ Aries";
    if (randomNumber === 1) {
        fortune = "Wealth flows toward you, but only if you release what no longer serves you.";
    } else {
        fortune = "Fortune favors the bold—take the leap you’ve been fearing.";
    }
} else if (month == 5) {
    horoscope = "♉ Taurus";
    if (randomNumber === 1) {
        fortune = "Love hides in plain sight—open your eyes to see it clearly.";
    } else {
        fortune = "An unexpected gift arrives, wrapped in a riddle only you can solve.";
    }
} else if (month == 6) {
    horoscope = "♊ Grmini";
    if (randomNumber === 1) {
        fortune = "A journey awaits, one that will test your courage and change your path.";
    } else {
        fortune = "The tides of fate shift; what you sow now reaps tomorrow’s harvest.";
    }
} else if (month == 7) {
    horoscope = "♋ Cancer";
    if (randomNumber === 1) {
        fortune = "Beware a silver-tongued stranger who promises more than they can give.";
    } else {
        fortune = "A rival watches from the shadows—stay sharp and trust your instincts.";
    }
} else if (month == 8) {
    horoscope = "♌ Leo";
    if (randomNumber === 1) {
        fortune = "Your dreams hold secrets—pay attention to the whispers of the night.";
    } else {
        fortune = "Joy sparkles on the horizon, but you must cross a river of doubt to reach it.";
    }
} else if (month == 9) {
    horoscope = "♍ Virgo";
    if (randomNumber === 1) {
        fortune = "Conflict looms, but your wisdom will turn foes into friends.";
    } else {
        fortune = "The past whispers lessons—listen, or repeat its quiet mistakes.";
    }
} else if (month == 10) {
    horoscope = "♎ Libra";
    if (randomNumber === 1) {
        fortune = "A long-held wish nears fulfillment—trust the timing of the universe.";
    } else {
        fortune = "A bridge to new horizons forms, built by hands you’ve yet to shake.";
    }
} else if (month == 11) {
    horoscope = "♏ Scorpio";
    if (randomNumber === 1) {
        fortune = "The winds of change blow swiftly—adapt or be swept aside.";
    } else {
        fortune = "Beware the mirror’s flattery; truth lies beyond its polished surface.";
    }
} else if (month == 12) {
    horoscope = "♐ Sagittarius";
    if (randomNumber === 1) {
        fortune = "Your intuition is your guide; heed it, and the fog will lift.";
    } else {
        fortune = "Your spirit dances with destiny—step boldly into the rhythm.";
    }
} else {
    console.log("An error occured. Type in a valid month (1-12).");
}


console.log("💖 Daily fortune teller 💖");
console.log("🆔 Your horoscope: " + horoscope);
console.log("🔮 Your daily fortune: " + fortune);