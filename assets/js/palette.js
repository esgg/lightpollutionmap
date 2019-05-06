var init = 14;

//Initial position of color range
var init_x = 0;
var init_y = 20;
var color_height = 20;

var pallete = ["rgb(255,255,255)","rgb(255,251,255)","rgb(255,247,255)","rgb(255,243,255)",
  "rgb(255,239,255)","rgb(255,235,255)","rgb(255,231,255)","rgb(255,226,255)","rgb(255,223,252)",
  "rgb(255,221,248)","rgb(255,219,244)","rgb(255,219,238)","rgb(255,221,234)","rgb(255,224,230)",
  "rgb(255,228,228)","rgb(255,232,226)","rgb(255,236,224)","rgb(255,240,222)","rgb(255,244,220)",
  "rgb(255,246,218)","rgb(250,246,216)","rgb(246,248,216)","rgb(242,250,215)","rgb(238,252,214)",
  "rgb(234,254,214)","rgb(230,255,216)","rgb(226,255,220)","rgb(223,255,224)","rgb(221,255,228)",
  "rgb(219,255,232)","rgb(217,255,236)","rgb(217,253,240)","rgb(217,251,244)","rgb(217,249,248)",
  "rgb(217,247,252)","rgb(216,244,254)","rgb(214,240,253)","rgb(212,234,251)","rgb(210,228,249)",
  "rgb(208,222,247)","rgb(207,212,248)","rgb(208,186,244)","rgb(211,154,238)","rgb(215,124,224)",
  "rgb(219,104,203)","rgb(223,090,172)","rgb(224,075,140)","rgb(220,059,106)","rgb(216,044,080)",
  "rgb(212,034,056)","rgb(208,026,043)","rgb(204,043,041)","rgb(203,067,039)",
  "rgb(210,090,037)","rgb(222,120,035)","rgb(232,158,033)","rgb(242,183,031)",
  "rgb(254,205,030)","rgb(235,206,032)","rgb(204,197,033)","rgb(168,190,033)",
  "rgb(127,186,035)","rgb(068,185,045)", "rgb(066,188,054)","rgb(053,192,091)",
  "rgb(047,197,120)","rgb(040,201,148)","rgb(033,197,176)","rgb(026,188,201)",
  "rgb(020,166,214)","rgb(017,142,220)","rgb(021,118,220)","rgb(025,094,219)",
  "rgb(029,070,215)","rgb(033,046,211)","rgb(038,028,206)","rgb(052,026,200)",
  "rgb(066,029,191)","rgb(080,033,180)","rgb(088,037,162)","rgb(093,042,144)",
  "rgb(090,051,126)","rgb(085,059,108)","rgb(079,063,090)","rgb(073,060,073)",
  "rgb(068,051,060)","rgb(064,042,048)","rgb(060,036,039)","rgb(056,032,033)",
  "rgb(052,028,029)","rgb(046,025,025)","rgb(038,021,021)","rgb(030,017,017)",
  "rgb(022,013,013)","rgb(014,011,011)","rgb(009,009,009)","rgb(007,007,007)",
  "rgb(005,005,005)","rgb(003,003,003)","rgb(001,001,001)"];

function draw_color_range(){


    var cv  = document.getElementById('cv'),
      ctx = cv.getContext('2d');
    ctx.text = "12px Arial";


    var sum=0;
    var magnitude = init;

    ctx.fillStyle = "#000000"
    ctx.fillText("14", 1, init_y+color_height+10);

    for(var i = 0; i <= 100; i++) { // fill strokes
        ctx.beginPath();

        if (i!=0 && i%10==0){
          ctx.fillStyle = "rgb(255,255,255)"
          ctx.fillRect((i * 3)+sum, init_y, 3, color_height);
          ctx.fillStyle = "#000000"
          magnitude = magnitude+1
          ctx.fillText(magnitude,(i * 3)+sum,init_y+color_height+10)
          sum = sum +1;
        }
        //var color = 'rgb(100, ' + i + ', ' + i + ')';
        var color = pallete[i]
        ctx.fillStyle = color;

        ctx.fillRect((i * 3)+sum, init_y, 3, color_height);
    }

}

function draw_magnitude(magnitude){

  //Get canvas component

  var cv  = document.getElementById('cv'),
      ctx = cv.getContext('2d');

  ctx.clearRect(0, 0, cv.width, cv.height);

  draw_color_range();

  ctx.text = "12px Arial";

  // Get magnitude

  var cur = parseFloat(magnitude.toFixed(1));

  //Calculate position

  var arrow_x = 0;

  var offset = cur - 14;

  arrow_x = offset * 30 + Math.trunc(offset);

  var arrow_y = init_y-1;

  //Draw arrow

  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(arrow_x, arrow_y);
  ctx.lineTo(arrow_x-5,arrow_y-5);
  ctx.lineTo(arrow_x+5,arrow_y-5);
  ctx.closePath();
  ctx.fill();

  // Draw magnitude

  ctx.fillStyle = "#000000";
  ctx.fillText(magnitude.toFixed(2),arrow_x-12,arrow_y-10)

}
