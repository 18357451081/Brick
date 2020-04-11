class Game {

    constructor(){
        this.canvas = canvas
        this.ctx = ctx
        this.pause = false
        this.over = false
        this.currentLevel = 0
        this.keyDowns = {
            // a: true
        }
        this.actions = {
            // a:function
        }

        this.run()
    }
    run(){
        var self = this
        window.setTimeout(function(){
            if(!self.pause && ! self.over){
                self.doAction()
                self.updateScreen()
                self.draw()
                // log("定时器工作正常")
            }
            self.run()
        },1000 / screen.fps)
    }
    doAction(){
        var keys = Object.keys(this.actions)
        for(var i=0; i<keys.length; i++){
            var k  = keys[i]
            if(this.keyDowns[k]){
                this.actions[k]()
            }
        }
    }

    registerAction(key,callback){
        //行为事件
        this.actions[key] = callback
    }

    

    
    
}