class ScenceMain{
    constructor(){
        this.elements = []
        this.setup()
        this.setinputs()
    }
    setup(){
        
    }
    loadLevel(index){
        window.blocks = []
        index -= 1
        var level = levels[index]
        for (var i = 0; i < level.length; i++) {
            var b = new Block(level[i])
            window.blocks.push(b)
        }
    }
}