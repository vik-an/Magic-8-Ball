// Single-sketch example

function setup (){
  createCanvas (800
  , 400);
} 

draw = function(){
 
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(25, 94, 255);
triangle(200, 90, 300, 280, 100, 280);
fill(255, 255, 255);

 var answer = floor(random(0,10));

    



if (answer === 0) {
  draw = function(){
    fill(208, 172, 247);
    text("ATSAKYMAS", 165, 200);
    text("NETRUKUS ", 166, 229); 
    text("IŠAIŠKĖS", 173, 259); 
}
}
else if(answer === 1){
    draw = function(){
    fill(136, 247, 89);
    text("TIKRAI", 180, 200);
    text("TAIP", 185, 229); 
}}
else if(answer === 2){
    draw = function(){
    fill(223, 127, 240);
    text("TIK NUO", 176, 200);
    text("TAVĘS PRIKLAUSO", 145, 229); 
}}
else if(answer === 3){
    draw = function(){
    fill(134, 247, 145);
    text("LABIAU TAIP", 165, 200);
    text("NEGU NE", 175, 229); 
    }}

 else if(answer === 4){
    draw = function(){
     fill(247, 145, 129);
    text("VISIŠKAI", 175, 200);
    text("NE", 190, 229); 
}}
else if(answer === 5){
    draw = function(){
    fill(107, 255, 66);
    text("TIKRAI", 180, 200);
    text("TAIP", 185, 229); 

}}
else if(answer === 6){
    draw = function(){
    fill(223, 230, 95);
    text("GERIAU", 175, 200);
    text("NEKLAUSK", 167, 229); 
}}
else if(answer === 7){
    draw = function(){
    fill(226, 166, 240);
    text("STEBĖK", 178, 200);
    text("VISATOS ŽENKLUS", 145, 229); 
}}
else if(answer === 8){
    draw = function(){
    fill(247, 138, 121);
    text("LABIAU NE", 170, 200);
    text("NEGU TAIP", 170, 229); 
}}
else if(answer === 9){
    draw = function(){
    fill(230, 216, 95);
    text("VISAIP", 180, 200);
    text("GALI BŪTI", 170, 229); 
}}

}



