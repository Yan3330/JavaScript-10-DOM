let input_width = document.querySelector('.input_width')
let input_height = document.querySelector(".input_height")
let input_color = document.querySelector(".input_color")
let input_radius = document.querySelector(".input_radius")
let container = document.querySelector(".container")

let btn_clear = document.querySelector(".clear")
let btn_create = document.querySelector(".create")

let btn_up = document.querySelector(".up")
let btn_down = document.querySelector(".down")
let btn_left = document.querySelector(".left")
let btn_right = document.querySelector(".right")

let newDiv;
let mTop = 0;
let mleft = 0;
let iwValue;
let ihValue;
let icValue;
let isRadius;
let isDiv = false;

const clearDiv = () => {
    container.firstChild.remove()

    isDiv = false
} 

const createDiv = () => {
    if (!isDiv) {
        iwValue = input_width.value
        ihValue = input_height.value
        icValue = input_color.value
        isRadius = input_radius.checked

        if (iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500) {
            newDiv = document.createElement('div')
            newDiv.style.width = iwValue + 'px'
            newDiv.style.height = ihValue + 'px'
            newDiv.style.backgroundColor = icValue

            if (isRadius) {
                newDiv.style.borderRadius = iwValue / 2 + 'px'
            }
            
            container.prepend(newDiv)

            isDiv = true
        }
    }
} 

btn_clear.addEventListener('click', clearDiv)
btn_create.addEventListener('click', createDiv)

const blockUp = () => {
    if (mTop - 10 >= 0) {
        mTop -=10
        newDiv.style.marginTop = mTop + 'px'
    }
}

const blockDown = () => {
    if (500 - (mTop*1 + ihValue*1 +  10) >= 0 ) {
        mTop += 10
        newDiv.style.marginTop = mTop + 'px'
    }
}

const blockLeft = () => {
    if (mleft - 10 >= 0) {
        mleft -=10
        newDiv.style.marginLeft = mleft + 'px'
    }
}

const blockRight = () => {
    if (500 - (mleft*1 + ihValue*1 +  10) >= 0 ) {
        mleft += 10
        newDiv.style.marginLeft = mleft + 'px'
    }
}

btn_up.addEventListener('click', blockUp)
btn_down.addEventListener('click', blockDown)
btn_left.addEventListener('click', blockLeft)
btn_right.addEventListener('click', blockRight)