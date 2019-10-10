const baseFontSize = 100
const baseWidth = 375

const setFontSize = () => {
    const viewWidth = window.innerWidth

    document.querySelector('html').style.fontSize = baseFontSize * (viewWidth / baseWidth) + 'px'
}

setFontSize()

window.onresize = () => {
    setFontSize()
}