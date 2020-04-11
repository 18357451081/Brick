class Board {
    constructor() {
        this.img = imageFromPath('img/board.png')
        this.onLeftMove = false
        this.onRightMove = false
        this.speed = 6
        this.width = 96
        this.height = 1
        this.y = screen.height * 6 / 7
        this.x = screen.width / 2 - this.width / 2 + 10
    }
    moveLeft () {
        if (this.x > screen.x) {
            this.x -= this.speed
        }
    }
    moveRight () {
        if (this.x + this.width < screen.width) {
            this.x += this.speed
        }
    }
    draw () {
        ctx.drawImage(this.img, this.x, this.y)
    }
}
