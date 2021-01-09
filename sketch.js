//Create variables here
var dog_img,dog;
var happydog_img;
var database;
var foodS,foodStock;

function preload(){
  //loading images
  dog_img=loadImage("images/dogImg.png")
  happydoy_img=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
  database= firebase.database();

  dog=createSprites(250,300,50,50);
  dog.addImage(dog_img)
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  
}

function draw() {  
  background(46,139,87);

  textSize(28)
  text("food remaining ",200,250)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog_img);
    foodStock-=1
  }else{
    dog.addImage(happydog_img);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){

  if(x<=0){
  x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


