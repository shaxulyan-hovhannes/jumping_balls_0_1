var balls = document.getElementById("ball");

var speedIncrease = document.getElementById("speedIncrease");

var speedDecrease = document.getElementById("speedDecrease");

var colors = ["blue", "brown", "cyan", "green", "red", "Turquoise", "gray", "Navy", "BlueViolet", "Fuchsia", "WhiteSmoke", "greenyellow", "orange", "yellow", "pink", "purple", "gold"];

var [topMin, topMax, leftMin, leftMax, size, sumSize, topValue, leftValue, speed] = [0, 503, 0, 1290, 0, 0, 0, 0, 0];


function ball() {
  size = Math.round(30 - 0.5 + Math.random() * (60 - 30 + 1));
  sumSize += size;
  var color  = colors[Math.floor(Math.random() * colors.length)];
  topValue = Math.round((topMin + size) - 0.5 + Math.random() * ((topMax - size) - (topMin + size) + 1));
  leftValue = Math.round((leftMin + size) - 0.5 + Math.random() * ((leftMax - size) - (leftMin + size) + 1));
  var ball1 = document.createElement("p");
  ball1.style.position = "absolute";
  ball1.style.top = topValue + "px";
  ball1.style.left = leftValue + "px";
  var i = parseInt(leftValue);
  var j = parseInt(topValue);
  ball1.style.width = size + "px";
  ball1.style.height = size + "px";
  ball1.style.borderRadius = "50%";
  ball1.style.backgroundColor = color;
  document.body.appendChild(ball1);
   anim(ball1, i);
  anim3(ball1, j);
}

balls.addEventListener("click", creteBalls);

function creteBalls() {
  if (topValue <= topMax && leftValue <= leftMax) {
  ball();
}
}


function anim(obj, i) {
   var color  = colors[Math.floor(Math.random() * colors.length)];
  obj.style.backgroundColor = color;
  var time1 = setInterval(function() {
    obj.style.left = i + "px";
    i++;

  if (parseInt(obj.style.left) == (leftMax)) {
    clearInterval(time1);
    anim2(obj, i);
  }
}, speed);
}


function anim2(obj, i) {
  var color  = colors[Math.floor(Math.random() * colors.length)];
  obj.style.backgroundColor = color;
  var time2 = setInterval(function() {
    obj.style.left = i + "px";
    i--;
    if (parseInt(obj.style.left) == 0) {
      clearInterval(time2);
      anim(obj, i);
    }
}, speed);
}

function anim3(obj, j) {
  var color  = colors[Math.floor(Math.random() * colors.length)];
  obj.style.backgroundColor = color;
  var time3 = setInterval(function() {
    obj.style.top = j + "px";
    j++;

    if (parseInt(obj.style.top) == (topMax) + 111) {
      clearInterval(time3);
      anim4(obj, j);
    }
}, speed);
}

function anim4(obj, j) {
  var color  = colors[Math.floor(Math.random() * colors.length)];
  obj.style.backgroundColor = color;
  var time4 = setInterval(function() {
    obj.style.top = j + "px";
    j--;
    if (parseInt(obj.style.top) == 0) {
      clearInterval(time4);
      anim3(obj, j);
    }
}, speed);
}

speedIncrease.addEventListener("click", speedPlus);

function speedPlus() {
  speed -= 10;
  return speed;
}
speedPlus();

speedDecrease.addEventListener("click", speedMinus);

function speedMinus() {
  speed += 10;
  return speed;
}
speedMinus();
