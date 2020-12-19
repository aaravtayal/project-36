//Create variables here
var dog,happydog,dogHappy;
var food,foodStocks;
var database;
var feed,addFood;
var foodObj;
var bottle;
var FeedTime;
var foodS;




function preload()
{
  //load images here
  happydog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000, 500);

  console.log(food);

  if(mousePressedOver(addFood))
  {
    food = food+1;
  }

   bottle = new foodStock();


   
  database = firebase.database();
  console.log(database);

  food = database.ref('food');
  food.on("value",readStock);

  
  dog = createSprite(900,300,20,20);
  dog.addImage(happydog);
  dog.scale = 0.2;



}


function draw() {  
  background("lightGreen")

  

  if(keyWentDown(UP_ARROW))
    {
      writeStock(food);
      dog.addImage(dogHappy);
      food = food-1;
    } 

 if(keyWentDown(DOWN_ARROW))
  {
      food = food+1;
  }


  /*fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data)
  {
    lastFed = data.val();
  })*/


  

        




  drawSprites();
  //add styles here  

  
  fill("black");
  textSize(20);
  text("Food Remaining:"+food,750,200);

  feed = createButton("feed the dog");
  feed.position(700,80);
  feed.mousePressed(feed);

  addFood = createButton("add food");
  addFood.position(800,80);
  addFood.mousePressed(addFood);



}

function readStock (data)
  {
    food = data.val();
  }

function writeStock(x)
  {
    database.ref('/').update
    ({
        food:x  
    })
  }

/*function feedDog()
 {
   dog.addImage(happydog);

   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   database.ref('/').update({
     food : foodObj.getFoodStock()
   })
 }

 function addFoods()
  {
     food++;
     database.ref('/').update({
       food : foodS
     })
  }*/





