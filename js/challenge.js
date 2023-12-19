//DEFINE DYNAMIC PAGE VALUES
let counter = 0
const countUp = document.getElementById('counter')
const likeList = document.querySelector('.likes')

//Counts + 1 every second
let interval = setInterval(() => {
    countUp.innerText = counter++
}, "1000")

//Plus button adds a count
const plusButton = document.getElementById('plus')
plusButton.addEventListener('click', () => {
    countUp.textContent = counter ++
})

//Minus button subtracts a count
const minusButton = document.getElementById('minus')
minusButton.addEventListener('click', () => {
    countUp.textContent = counter--
})

//Like button displays count
const likeButton = document.getElementById('heart')
likeButton.addEventListener('click', () => {
    const newList = document.createElement('li')
    const message = `There are ${countUp.textContent} counts that have occurred!`
    newList.textContent = message
    likeList.appendChild(newList)
})

//Pause button to stop count
const pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', () => {
    if (pauseButton.innerText === 'pause'){
        clearInterval(interval)
        pauseButton.textContent = 'resume'
        minusButton.disabled = true
        plusButton.disabled = true
        likeButton.disabled = true
    }
    else {
        interval = setInterval(() => {
            countUp.innerText = counter++
        }, "1000")
        pauseButton.textContent = 'pause'
        minusButton.disabled = false
        plusButton.disabled = false
        likeButton.disabled = false
    }
})

//Submit Comment!
const submitButton = document.getElementById('submit')
const submitField = document.getElementById('comment-input')
const commentField = document.getElementById('list')

function submitComment(){
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault()
        const commentList = document.createElement('li')
        commentList.textContent = submitField.value
        console.log(commentField.appendChild(commentList))
        submitField.value = ''
    })
}
submitComment()