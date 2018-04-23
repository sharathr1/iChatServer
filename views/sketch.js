/*    var realMouseX, realMouseY;
    var pixelScale = 4;

    function setup() {
        console.log("setup")
        var canvas = createCanvas(64, 64);

        canvas.style("width", width * pixelScale + "px");
        canvas.style("height", height * pixelScale + "px");

        mario = loadImage("mario.png");
        noSmooth();

        canvas.elt.addEventListener('mousemove', function (evt) {

            var sx = canvas.width / width;
            var sy = canvas.height / height;

            var rect = this.getBoundingClientRect();

            realMouseX = (evt.clientX - rect.left) / sx;
            realMouseY = (evt.clientY - rect.top) / sy;

        }, false);
    }

    function draw() {
        console.log("draw")

        background(240);
        image(mario, 10, 10);

        stroke(0);
        point(mouseX, mouseY);

        stroke(255, 0, 0);
        point(realMouseX, realMouseY);
    }*/