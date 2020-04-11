var loadLevel = function(index){
    window.blocks = []
    index -= 1
    var level = levels[index]
    window.score.blockNum = level.length
    for (var i = 0; i < level.length; i++) {
        var b = new Block(level[i])
        window.blocks.push(b)
    }
}

var debugMode = function(enable){
    if(! enable) return
    addEventListener("keydown",function(event){
        if('12345'.includes(event.key)){
            loadLevel(event.key)
        }
    })
}

var __main = function(){
    var images = {
        ball:'img.ball.png',
        board:'img.board.png',
        block:'img.block.png',
    }
    var fpsRange = document.getElementById('range')
    fpsRange.width = screen.width
    var board = new Board()
    var ball = new Ball()
    window.score = new Score()

    var initImage = function(){
        loadLevel(1)
        onloadImage = function (obj) {
            obj.img.onload = function () {
                obj.draw()
            }
        }
        onloadImage(board)
        onloadImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            onloadImage(blocks[i])
        }
    }
    initImage()
    var game = new Game()

    debugMode(true)

    game.updateScreen = function () {
        screen.fps = parseInt(fpsRange.value)
        screen.clearRect()
        ball.move()
        //游戏结束
        if(ball.y - ball.height > board.y){
            game.over = true
            game.draw = function(){
                ctx.font = "48px serif";
                ctx.fillText("游戏结束", screen.width / 2　- 48 * 2, screen.height * 3 / 4);
            }
        }
        
        if (collisioned(board, ball)) {
            ball.speedY *= -1
        }
        for (var i = 0; i < blocks.length; i++){
            if (collisioned(ball, blocks[i]) && blocks[i].alive) {
                blocks[i].alive = false
                window.score.blockNum -= 1
                window.score.scoreNum += 10 * window.score.currentLevel
                ball.speedY *= -1
                if(window.score.blockNum < 1){
                    levelNum --
                    window.score.currentLevel = levels.length - levelNum
                    loadLevel(window.score.currentLevel)
                } 
            }
        }
    }

    game.draw = function(){
        board.draw()
        ball.draw()
        window.score.draw()
        for (var i = 0; i < blocks.length; i++) {
            if (blocks[i].alive) {
                blocks[i].draw()
            }
        }
    }
    
    window.addEventListener("keydown", function (event) {
        if (event.key == "a") {
            game.keyDowns['a'] = true
        }
        if (event.key == "d") {
            game.keyDowns['d'] = true
        }
        if(event.key == 'p') {
            game.pause = ! game.pause
        }
        if(event.key == 'Enter') {
            game.over = false
            game.pause = false
            ball.y = screen.height / 5
            game.draw = function(){
                board.draw()
                ball.draw()
                window.score.draw()
                for (var i = 0; i < blocks.length; i++) {
                    if (blocks[i].alive) {
                        blocks[i].draw()
                    }
                }
            }
        }
    })
    
    window.addEventListener("keyup", function (event) {
        if (event.key == "a") {
            game.keyDowns['a'] = false
        } else if (event.key == "d") {
            game.keyDowns['d'] = false
        }
    })
    
    game.registerAction('a',function(){
        board.moveLeft()
    })
    game.registerAction('d',function(){
        board.moveRight()
    })
    
    if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function(event) {
                // alpha: 在Z轴上的角度
                var rotateDegrees = event.alpha;
                // gamma: 从左到右
                var leftToRight = event.gamma;
                // beta: 从前到后的运动
                var frontToBack = event.beta;
                
                handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
            }, true);
        }
        var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
            if(leftToRight < -10){
                game.keyDowns['a'] = true
            }else if(leftToRight > 10){
                game.keyDowns['d'] = true
            }else{
                game.keyDowns['a'] = false
                game.keyDowns['d'] = false
            }
        };

}