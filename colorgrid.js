       var numSquares = 6;
	   var colors=generateRandomColor(numSquares);
	   var squares =document.querySelectorAll(".square");
	   var dcolor=document.getElementById("displaycolor");
	   var mdisplay=document.querySelector("#messageDisply");
	   var h1=document.querySelector("h1");
	   var selectedcolor=selectColor();
	   var resetBtn=document.querySelector("#reset");
	   var easyBtn=document.querySelector("#easyButton");
	   var hardBtn=document.querySelector("#hardButton");
	   easyBtn.addEventListener("click",function(){
		   hardBtn.classList.remove("selected");
		   easyBtn.classList.add("selected");
		   var numSquares = 3;
		   colors = generateRandomColor(numSquares);
           selectedcolor = selectColor();
		   dcolor.textContent=selectedcolor;
           for(var i=0 ; i<squares.length ; i++){
		   		  if(colors[i]){
				  squares[i].style.background = colors[i];
				  }else{
				  squares[i].style.display = "none";
				  }
				 }			   
	   });
	   hardBtn.addEventListener("click",function(){
		   easyBtn.classList.remove("selected");
		   hardBtn.classList.add("selected");
		   var numSquares = 6;
		  colors=generateRandomColor(numSquares);
		  selectedcolor=selectColor();
		  dcolor.textContent=selectedcolor;
		  for(var i=0;i<squares.length;i++)
		    {
			 squares[i].style.background=colors[i];
			 squares[i].style.display = "block";
		   }
	   });
	   
	   resetBtn.addEventListener("click",function(){
		  
		 colors=generateRandomColor(numSquares);
		 selectedcolor=selectColor();
		 dcolor.textContent=selectedcolor;
		 this.textContent = "newcolor";
		 mdisplay.textContent = "";
		 for(var i=0;i<squares.length;i++)
		 {
			 squares[i].style.background=colors[i];
		 }
		 h1.style.background="steelblue";
	   });
	   dcolor.textContent=selectedcolor;
	   
	   for(var i=0;i<squares.length;i++)
	   {
		   squares[i].style.background=colors[i];
		   squares[i].addEventListener("click",function(){
			  //alert(this.style.background);
			  targetcolor = this.style.background;
			  console.log(selectedcolor,targetcolor);
			  if(selectedcolor === targetcolor)
			  {
				  alert("you are correct");
				  mdisplay.textContent="correct!";
				  resetBtn.textContent = "play Again?";
				   
				 changeColor(selectedcolor);
				 h1.style.background = selectedcolor;
				 
				 }
			  else{
				  alert("sorry, wrong");
				  mdisplay.textContent="try again";
				  this.style.background = "black";
			  }
			    });
	   }
			  function changeColor(color)
			  {
				  for(var i=0;i<squares.length;i++)
				  {
					  squares[i].style.background = color;
				  }
			  }
			  
			  function selectColor()
			  {
				  var random = Math.floor(Math.random() * colors.length);
				  return colors[random];
			  }
			  
			  function generateRandomColor(num){
				   var arr = [];				 
				  for(var i=0; i<num; i++)
				  {
			       arr.push(randomColor());
				  }
				  return arr;
			  
			  }
			  
		 function randomColor(){
			var r = Math.floor((Math.random() * 256));
			var g = Math.floor((Math.random() * 256));
			var b = Math.floor((Math.random() * 256));
			return "rgb("+ r + ", "+ g + ", "+ b +")";
		 }
			  