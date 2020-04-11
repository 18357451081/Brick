class Block{
    constructor(postion){
        this.img = imageFromPath('img/block.png')
        this.height = 10
        this.width = 39
        this.alive = true
        this.x = postion[0]
        this.y = postion[1]
    }
    
    draw () {
        ctx.drawImage(this.img, this.x, this.y)
    }
}