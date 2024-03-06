// Test connection to index.html
console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Magic answers array
magicAnswers = [
    "getaway-shootout.github.io/category/sports.html",
    "thisistheonlylevel.github.io/",
    "topvaz.github.io/",
    "zhenning106.github.io/topvaz.github.io/",
    "riddle-school.github.io/category/racing.html",
    "topvazgames.com/",
    "topvaz.fun/",
    "topvaz.wiki/",
    "topvazgam3s.com/category/racing.html",
    "23azogames.github.io/",
    "armor-games.github.io/",
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
