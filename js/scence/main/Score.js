class Score{
    constructor(){
        this.blockNum = 0
        this.scoreNum = 0
        this.currentLevel = 1
    }
    draw(){
        ctx.font = "16px serif";
        ctx.fillText("得分:" + this.scoreNum, screen.x + 10, screen.y + 25);
        ctx.fillText("关卡:" + this.currentLevel,  screen.x + 10, screen.y + 50);
    }
}