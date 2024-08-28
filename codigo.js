const sonic = document.querySelector('.sonic')
const pipe = document.querySelector('.pipe')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')

const startgame = () => {
    pipe.classList.add('pipe-animation')
    start.style.display = 'none'
}

const restartGame = () => {
    gameOver.style.display = 'none'
    pipe.style.left = ''
    pipe.style.right = '0'
    sonic.src = './img/sonic running.gif'
    sonic.style.width = '150px'
    sonic.style.bottom = '0'
    
    start.style.display = 'none'
}

const jump = () => {
    sonic.classList.add('jump')

    setTimeout(() => {
        sonic.classList.remove('jump')
    }, 800)
}

const loop = () => {
    setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const sonicPosition = window.getComputedStyle(sonic)
        .bottom.replace('px', '')

        if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80) {
            pipe.classList.remove('pipe-animation')
            pipe.style.left = `${pipePosition}px`

            sonic.classList.remove('jump')
            sonic.style.bottom = `${sonicPosition}px`

            sonic.src = './img/game-over.png'
            sonic.style.width = '80px'
            sonic.style.marginLeft = '50px'
        }
    }, 10)  // Intervalo para garantir um loop contínuo
}

loop()

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === ' ') {
        jump()
    }
})

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump()
    }
})

document.addEventListener('keypress', e =>{
    const tecla = e.key
    if (tecla === 'Enter') {
        startgame()
    }
})
