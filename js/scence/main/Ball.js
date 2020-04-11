class Ball{
    
    constructor() {
        this.img = imageFromPath('img/ball.png')
        this.onLeftMove = false
        this.onRightMove = false
        this.speedX = 3
        this.speedY =-3
        this.x = screen.width / 2
        this.y = screen.height / 5
        this.height = 10
        this.width =10
    }
    move() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x <= screen.x || this.x + this.width >= screen.width) {
            this.speedX *= -1
        }
        if (this.y < screen.y || this.y + this.height > screen.height) {
            this.speedY *= -1
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y)
    }
}
