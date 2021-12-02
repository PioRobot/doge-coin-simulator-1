var numb = 1000000;
var value;
var coin;
var coinimg;
var buton1;

function preload(){
  
  coinimg = loadImage("kisspng-dogecoin-cryptocurrency-digital-currency-doge-5ac3a787122c26.7280659415227718470745.jpg");
  
}




function setup() {
  createCanvas(400, 400);
  
 value = 0; 
  buton1=color("#2F99EF");
  buton1 = createSprite(100,300,60,60);
  
  

 
}

function draw() {
  background(220);
  fill("black");
  textSize(20);
  text("Value:" + value,170,280);
  
  text("invest",70,268);
  
  text("money:" + numb,250,50);
  
  fill(255, 204, 0)
  coin = ellipse(200,200,100,100);
  
  //buton1 = rect(100,300,70,70);
  
  if(mousePressedOver(buton1)){
    value = value+1;
    numb = numb-1;
  }
  
  drawSprites();
}