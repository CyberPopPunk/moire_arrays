function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(180);

    for (let i = 0; i < height; i++){
            for (let c = 0; c < width; c++){
                line(c, i, width/2, height/2);
            }
    }
}