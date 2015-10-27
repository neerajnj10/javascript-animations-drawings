/*draw anything*/

var draw = function() {
    if (mouseIsPressed){
        noStroke();
        fill(196, 86, 86);
        ellipse(mouseX, mouseY, 20, 20);
    }
};
