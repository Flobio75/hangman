function initWord () {
    wordsList = [
    "Jazz",
    "Button",
    "Space",
    "Fox",
    "Oxen",
    "Escalate",
    "Fraction",
    "Supose",
    "Spin",
    "Shift"
    ]
    randomWordIndex = randint(0, wordsList.length - 1)
    TargetWord = wordsList[randomWordIndex]
}
let TargetWord = ""
let randomWordIndex = 0
let wordsList: string[] = []
initWord()
