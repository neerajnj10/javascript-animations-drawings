//mouse track for text and labels(coordinates in the plane)

fill(255, 0, 255);

var draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12); 
    var label = mouseX + "," + mouseY;
    text(label, mouseX,mouseY);
};
