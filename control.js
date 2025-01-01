window.addEventListener("load", function() {
	const itemCount = document.getElementById("itemCount");
	const recipeCount = document.getElementById("recipeCount");
	
	itemCount.innerText = Object.keys(items).length + " items.";
	recipeCount.innerText = Object.keys(recipes).length + " recipes.";
	
	
	
	const canvas = document.getElementById("render");
	const ctx = canvas.getContext("2d");
	
	// Node is Amount, Recipe, x, y, w, h, Connections
	const nodes = [];
	
	function resizeCanvas() {
		canvas.width = window.innerWidth - 250;
		canvas.height = window.innerHeight;
		drawCanvas();
	}
	
	function drawCanvas() {
		if(nodes.length == 0) {
			ctx.font = "96px serif";
			ctx.textAlign = "center";
			ctx.fillText("Get started by adding\na Recipe!", canvas.width / 2, canvas.height / 2);
			return;
		}
		
		
	}
	
	resizeCanvas();
	window.addEventListener("resize", resizeCanvas);
});