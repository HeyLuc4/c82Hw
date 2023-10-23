var mouseEvent = "empty"
canvas = document.getElementById("meuCanvas");
ctx = canvas.getContext("2d");
color = "black";
penWidth = "1";
radius = "1";

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("Width").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseMove", myMouseMove);
function myMouseMove(e){
    posicaoMouseX = e.clientX - canvas.offsetLeft; 
    posicaoMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        console.log("Posição atual de x e y:");
        console.log("X = " + posicaoMouseX + "Y = " + posicaoMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = penWidth;
        ctx.arc(posicaoMouseX,posicaoMouseY,radius,0,2*Math.PI);
        ctx.stroke();
    };
};

function clearCanvas(){
    ctx.clearRect(1000,1000,1000,1000);
};