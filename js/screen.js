var screen = {
    height: 300,
    width: 400,
    x: 0,
    y: 0,
    fps:60,
    clearRect:function(){
        ctx.clearRect(screen.x, screen.y, canvas.width, canvas.height)
    } 
}