var imageFromPath = function (path) {
    var image = new Image()
    image.src = path
    return image
}

var collisioned = function (red, blue) {
    // 此算法不适用与canvas 2D碰撞检测
    // if (Math.abs(red.x - blue.x) <= red.width / 2 + blue.width / 2) {
    //     if (Math.abs(red.y - blue.y) <= red.height / 2 + blue.height / 2) {
    //         log("ball",ball)
    //         log("board",board)
    //         return true
    //     }
    // }
    if(red.x + red.width >= blue.x && red.x <= blue.x + blue.width){
        if(red.y + red.height >= blue.y && red.y <= blue.y + blue.height){
            return true
        }
    }
    return false
}