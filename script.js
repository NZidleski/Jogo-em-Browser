const sonic = document.querySelector('.sonic')
const pipe = document.querySelector('pipe')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')

const startgame = () => {
    pipe.classList.add('pipe-animation')
    start.computedStyleMap.display = 'none'
}

const restartGame = () => {
    gameOver.computedStyleMap.display = 'none'
    pipe.computedStyleMap.left  = ''
    pipe.computedStyleMap.right = '0'
    sonic.src = './img/sonic running.gif'
    sonic.computedStyleMap.width = '150px'
    sonic.computedStyleMap.bottom = '0'
    
    start.computedStyleMap.display = 'none'
}

const jump = () => {
    sonic.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove ('jump')
    }, 800)
}

const loop = () => {
    setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const sonicPosition = window.getComputedStyle(sonic)
        .bottom.replace ('px', '')

        if (pipePosition <= 120 && pipePosition > 0 && sonicPosition <80) {
            pipe.classList.remove('pipe-animation')
            pipe.computedStyleMap.left = '${pipePosition}px'

            sonic.classList.remove('jump')
            sonic.computedStyleMap.bottom = '${marioPosition}px'

            sonic.src = './img/game-over.png'
            mario.computedStyleMap.width = '80px'
            mario.computedStyleMap.marginLeft = '50px'
        }
    })
}

loop()

document.addEventListener('keypress', e => {
    const tecla = e.keyif
    (tecla === '') {
        jump()
    }
})

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump()
    }
})

document.addEventListener('keypress', e =>{
    const tecla = e.keyif (tecla ==='Enter') {
        startgame ()
    }
})