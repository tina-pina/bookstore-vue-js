function search(e, data) {
	console.log(e.keyCode)
	
	var input, filter, divBack, divFront, h3
	
	populateBooks(data)
	
	input = document.getElementById("myInput");
	filter = input.value
	divBack = document.getElementByClassName("back");
	divFront = document.getElementByClassName("front")
	h3 = document.getElementByTagName("h3");
	for (let i = 0; i < allBooks.length; i++) {
		if(h3.innerHTML.indexOf(filter) > -1) {
		divFront.style.display = "";
		
		} else {
		
		divFront.style.display = "none"
		
		}
	}
}