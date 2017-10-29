//     problem number one
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const imageBack=new Image();
  imageBack.src="http://blog.sklambert.com/wp-content/uploads/2012/09/bg.png";

const colorArray = ["red","BlanchedAlmond","CadetBlue" , "yellow","Chartreuse ","DarkMagenta ","DarkViolet ","LawnGreen ","pink" ,"blue" ,"green"];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

const createPoints = function(count, canvasWidth, canvasHeight) {
  const points =  [];
  const pushToArray = function(n) {
    if (n < 1) {return ""}
    points.push({
      x: rand(canvasWidth - 30),
      y: rand(canvasHeight - 30),
      width:  30,
      height: 30,
      xDelta: 1,
      yDelta: 1,
      color:  colorArray[rand(12)-1]
    });
    pushToArray(n-1)
  }
  pushToArray(count);
  return points;
  };

const forEach = function(arr, func) {
    const helper = function(index) {
        if(index=== arr.length)
            return;

        func(arr[index]);
        helper(index + 1);
    };
     helper(0);
};


////////////////////////////////////////////////////////////////////////

 ///             problem number two

////////////////////////////////////////////////////////////////////////


<canvas id="mycanvas" width="750" height="500" style="border:2px solid #000000;"></canvas>

<script>

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const imageBack=new Image();
  imageBack.src="http://blog.sklambert.com/wp-content/uploads/2012/09/bg.png";

const colorArray = ["red","BlanchedAlmond","CadetBlue" , "yellow","Chartreuse ","DarkMagenta ","DarkViolet ","LawnGreen ","pink" ,"blue" ,"green"];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

const createPoints = function(count, canvasWidth, canvasHeight) {
  const points =  [];
  const pushToArray = function(n) {
    if (n < 1) {return ""}
    points.push({
      x: rand(canvasWidth - 30),
      y: rand(canvasHeight - 30),
      width:  30,
      height: 30,
      xDelta: 1,
      yDelta: 1,
      color:  colorArray[rand(12)-1]
    });
    pushToArray(n-1)
  }
  pushToArray(count);
  return points;
  };

const forEach = function(arr, func) {
    const helper = function(index) {
        if(index=== arr.length)
            return;

        func(arr[index]);
        helper(index + 1);
    };
     helper(0);
};

  const myAllPoints = createPoints(100, canvas.width, canvas.height);

const update = function() {
  forEach(myAllPoints, function(point) {
    if(point.x + point.width>= canvas.width || point.x < 0) {
      point.xDelta = - point.xDelta;
      point.color = colorArray[rand(12)-1];
                      }

    if(point.y + point.height>= canvas.height || point.y < 0) {
      point.yDelta = - point.yDelta;
      point.color = colorArray[rand(12)-1];
                      }
    point.x = point.x + point.xDelta;
    point.y = point.y + point.yDelta;
  })
};

const draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageBack,0,0,canvas.width,canvas.height);
        forEach(myAllPoints, function(point) {
            ctx.fillStyle = point.color;
            ctx.fillRect(point.x, point.y, point.width, point.height);
               });
};



const looping = function() {
  draw();
  update();
  requestAnimationFrame(looping);
      };



  looping();

</script>


////////////////////////////////////////////////////////////////////////////

//                 problem number 3

////////////////////////////////////////////////////////////////////////////


<canvas id="mycanvas" width="750" height="500" style="border:2px solid #000000;"></canvas>

<script>

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const imageBack=new Image();
  imageBack.src="https://orig00.deviantart.net/a7dd/f/2015/079/5/b/empty_field__rebeltaxi_animation_background_1__by_jradgex-d8mf3hm.jpg";


const colorArray = ["red","MidnightBlue","DarkBlue" , "black","DarkViolet ","Navy","Darkor ","DarkGreen ","DarkRed " ,"blue" ,"DarkSlateGray"];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

const createPoints = function(count, canvasWidth, canvasHeight) {
  const points =  [];
  const pushToArray = function(n) {
    if (n < 1) {return ""}
    points.push({
      x: rand(canvasWidth - 30),
      y: rand(canvasHeight - 30),
      width:  20,
      height: 20,
      xDelta: 1,
      yDelta: 1,
      color:  colorArray[rand(12)-1]
    });
    pushToArray(n-1)
  }
  pushToArray(count);
  return points;
  };

const forEach = function(arr, func) {
    const helper = function(index) {
        if(index=== arr.length)
            return "";

        func(arr[index]);
        helper(index + 1);
    };
     helper(0);
};

    const image=new Image();
   image.src="http://otc.ninja/images/ninja.png";

  const gameData={
    hero : {
      x: 100,
      y: 450,
      img:image,
      width: 60,
      height:50,
      xDelta:0,
      yDelta:0
          }
    };


  const myAllPoints = createPoints(50, canvas.width, canvas.height);

const update = function() {
  forEach(myAllPoints, function(point) {
    if(point.x + point.width>= canvas.width || point.x < 0) {
      point.xDelta = - point.xDelta;
      point.color = colorArray[rand(12)-1];
                      }

    if(point.y + point.height>= canvas.height || point.y < 0) {
      point.yDelta = - point.yDelta;
      point.color = colorArray[rand(12)-1];
                      }
    point.x = point.x + point.xDelta;
    point.y = point.y + point.yDelta;


    if (point.x < gameData.hero.x + gameData.hero.width &&
          point.x + point.width > gameData.hero.x &&
         point.y < gameData.hero.y + gameData.hero.height &&
         point.height + point.y > gameData.hero.y) {

           point.x = point.x + 100;
           point.y = point.y - 120;        // collision detected!
    }
  })
};

const draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageBack,0,0,canvas.width,canvas.height);
  const hero=gameData.hero;
    ctx.drawImage(hero.img,hero.x,hero.y,hero.width,hero.height);
        forEach(myAllPoints, function(point) {
            ctx.fillStyle = point.color;
            ctx.fillRect(point.x, point.y, point.width, point.height);
               });
};



const looping = function() {
  draw();
  update();
  requestAnimationFrame(looping);
      };



  looping();

   const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;

  document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
        gameData.hero.x = gameData.hero.x  + 8
    }  else if (event.keyCode === leftKey){
        gameData.hero.x = gameData.hero.x  - 8
    } if(gameData.hero.x <= 0){
       gameData.hero.x = mycanvas.width  ;

    }




   }, false);

   </script>
