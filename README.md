<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>打砖块</title>
    <style>
        #canvas {
            border: 1px black solid;
        }
    </style>
</head>

<body>
    <canvas id="canvas"></canvas>
    <input type="range" id="range" min="1" max="120" value="60" width="300"></input>
    <button id="rest">重新开始</button>
    <script src="js/screen.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/levels.js"></script>
    <script src="js/scence/main/Ball.js"></script>
    <script src="js/scence/main/Block.js"></script>
    <script src="js/scence/main/Board.js"></script>
    <script src="js/scence/main/Score.js"></script>
    <script src="js/Game.js"></script>
    <script src="js/main.js"></script>
    <script>
        var log = console.log
        var canvas = document.getElementById("canvas")
        canvas.height = screen.height
        canvas.width = screen.width
        var ctx = canvas.getContext('2d')
        __main()
        
    </script>
</body>

</html>
