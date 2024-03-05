// Test connection to index.html
console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Magic answers array
magicAnswers = [
    "https://getaway-shootout.github.io/category/sports.html",
    "https://thisistheonlylevel.github.io/",
    "https://topvaz.github.io/",
    "https://zhenning106.github.io/topvaz.github.io/",
    "https://riddle-school.github.io/category/racing.html",
    "https://topvazgames.com/",
    "https://topvaz.fun/",
    "https://topvaz.wiki/",
    "https://topvazgam3s.com/category/racing.html",
    "https://23azogames.github.io/",
    "https://armor-games.github.io/",
    "It is certain.",
    "It is certain.",
    "It is certain.",
    "https://topvazgam3s.com/",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
]

// Define startGame function
function startGame() {

    // Choose random finalAnswer from array
    let finalAnswer = magicAnswers[Math.floor(Math.random() * magicAnswers.length)]

    // Print to screen
    let resultsWindow = document.getElementById('magicAnswerBox')
    resultsWindow.textContent = finalAnswer
    document.body.appendChild(resultsWindow)
}

// Start game by clicking button
let element = document.getElementById('startBtn')
element.onclick = startGame
