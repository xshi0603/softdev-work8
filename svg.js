var c = document.getElementById("svgg");

var sbutton = document.getElementById("sbutton");

var ebutton = document.getElementById("ebutton");
var cebutton = document.getElementById("cebutton");

var dbutton = document.getElementById("dbutton");
var cdbutton = document.getElementById("cdbutton");

var expanding = true;

var e = false; //state variables
var d = false; //state variables

var id = 0;

var radius = 1;

var animate = function() {

    while (c.firstChild) {
	c.removeChild(c.firstChild);
    } 

    var drawCircle = function() {
	if (expanding) {

	    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute("cx", 250);
	    c1.setAttribute("cy", 250);
	    c1.setAttribute("r", radius);
	    c.append( c1);	    
	    radius++;
	}
	else {
	    
	    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute("cx", 250);
	    c1.setAttribute("cy", 250);
	    c1.setAttribute("r", radius);
	    c.append( c1);
	    
	    radius--;
	}
    };

    var checkExpand = function() {
	
	if (radius >= 250 || radius == 0) {
	    expanding = !expanding;
	    console.log("test");
	}
	
    };

    checkExpand();
    drawCircle();
};

var height1 = 20;
var width1 = 30;

var x = Math.floor(Math.random() * (500-width1));
var y = Math.floor(Math.random() * (500-height1));

var vx = 1;
var vy = 1;

var animate2 = function() {


    while (c.firstChild) {
	c.removeChild(c.firstChild);
    } 
    
    var drawRect = function() {
	
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	c1.setAttribute("x", x);
	c1.setAttribute("y", y);
	c1.setAttribute("width", width1);
	c1.setAttribute("height", height1);
	c.append( c1);	    

	x += vx;
	y += vy;

    };

    var checkDir = function() {
	
	if (x + width1 == 500 || x == 0) {
	    vx = vx * -1;
	}
	else if (y + height1 == 500 || y == 0) {
	    vy = vy * -1;
	}
	
    };

    checkDir();
    drawRect();
};

sbutton.addEventListener('click', function() { 
	
    clearInterval(id);

});

ebutton.addEventListener('click', function() { 

    clearInterval(id);
    radius = 1;
    expanding = true;
    id = setInterval( animate , 10);
    
});

cebutton.addEventListener('click', function() { 

    clearInterval(id);
    id = setInterval( animate , 10);
    
});

dbutton.addEventListener('click', function() { 

    clearInterval(id);
    x = Math.floor(Math.random() * (500-width1));
    y = Math.floor(Math.random() * (500-height1)); 
    id = setInterval( animate2 , 10);
    
});

cdbutton.addEventListener('click', function() { 

    clearInterval(id);
    id = setInterval( animate2 , 10);
    
});
