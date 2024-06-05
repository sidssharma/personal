

function StarShape(top, left){
	this.top = top,
	this.left = left,
	this.shape = ()=>{
		const starBody = document.createElement("div")
		document.querySelector(".nightbody").appendChild(starBody)
		starBody.classList.add("star")
		starBody.position = "absolute"
		starBody.style.top = top;
		starBody.style.left = left;
		// console.log("this is done");
		// starBody.style.height = "100px";
		var defaulttop = top;
		var defaultleft = left;
		var newMotion = window.setInterval(()=>{
			defaulttop = parseInt(defaulttop) + 10
			// console.log(defaulttop)
			defaultleft = parseInt(defaultleft) + 10
			// starBody.style.visibility = "hidden";
			// console.log(defaultleft)
			starBody.style.top = defaulttop
			starBody.style.left = defaultleft
			if(defaulttop>window.getComputedStyle(document.querySelector(".nightbody")).height.slice(0,-2)*0.9){
				defaulttop=top;
				defaultleft = left;
			}else if(defaultleft>window.getComputedStyle(document.querySelector(".nightbody")).width.slice(0,-2)*0.9){
				defaultleft = left;
				defaulttop = top;
			}
			if(defaultleft<0){
				starBody.style.visibility = "hidden";
			}else if(defaultleft>0){
				starBody.style.visibility = "visible";
			}
			if(defaulttop<0){
				starBody.style.visibility = "hidden";
			}else if(defaulttop>0){
				starBody.style.visibility = "visible";
			}



		},100
			)

	}


}

for (var i=0;i<15;i++){
	leftvalue = getRandomNumber(window.getComputedStyle(document.querySelector(".nightbody")).height.slice(0,-2)*-0.6,window.getComputedStyle(document.querySelector(".nightbody")).height.slice(0,-2)*0.6)
	topvalue = getRandomNumber(-150,20)
	// console.log(topvalue)
	var star = new StarShape(topvalue,leftvalue);
	star.shape();
	// star.left = "50px"
	// const starBody = document.createElement("div")
	// starBody.classList.add(".star")
	// starBody.

}
function testFunc(){
	console.log("running");
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
