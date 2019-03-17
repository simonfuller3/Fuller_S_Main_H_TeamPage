(() => {
	console.log("JavaScript is Linked");

// variables for title changes
var hayTitle = document.createElement('p'),
	simTitle = document.createElement('p'),
	name = document.querySelector("#name");

	hayTitle.textContent = 'Hayden Main';
	simTitle.textContent = 'Simon Fuller';
	hayTitle.setAttribute("id", "haydensTitle");
	simTitle.setAttribute("id", "simonsTitle");

	// variables for photos 

var pic = document.querySelector("#photo1");


// array for paragraph for Hayden and i

var hayText = ["Hayden bio......."],
	simText = ["Simon bio........."],
	bio = document.querySelector("#bio");
	

//functions


// functions for changing names
//this one is to change to hayden's name, as we need multiple functions due to
//multiple buttons
function changeName() {
	//if the name had children already inside of the element, give it a 'null'
	//so that other name can replace it.
	if (name.hasChildNodes(document.getElementById("name"))) {
		name.textContent = '';
		//this appends the title variable i created and declared with the 
		//set attribute tag.
		name.appendChild(hayTitle);
	} 
	//if the name has simons name in it, remove it.
	else if (name.hasChildNodes(document.getElementById("name"))) {
		//removes simon's title out of the container if its there.
		name.removeChild(document.getElementById("simTitle"));
		name.appendChild(hayTitle);
	}
}

//function to change my name when button is clicked
function changeName2() {
	//if the name had children already inside of the element, give it a 'null'
	//so that other name can replace it.
	if (name.hasChildNodes(document.getElementById("name"))) {
		name.textContent = '';
		//this appends the title variable i created and declared with the 
		//set attribute tag.
		name.appendChild(simTitle);
	}
	//if name has hayden in it, remove and replace. 
	else if (name.hasChildNodes(document.getElementById("name"))) {
		//removes haydens name from the container if it's there.
		name.removeChild(document.getElementById("hayTitle"));
		name.appendChild(simTitle);
	}
}


//change source picture to hayden's photo
function changePhoto() {
	pic.src = "images/hayden.png";
}

//change source picture to my folder 
function changePhoto2() {
	pic.src = "images/simon.png";
}

//change biography functions
//haydens Bio
function changeBio() {
	//this is to empty the placeholder description, or whoever elses bio is in the cont.
	bio.innerHTML = '';
	//simply replacing null with the declared bio variable
	bio.innerHTML += 'hayText';
}

//my own bio, same deal as the first change bio function.
function changeBio2() {
	bio.innerHTML = '';
	bio.innerHTML += 'simText';
}


//event listeners

//event listener for hayden's button
document.getElementById("hayButton").addEventListener("click", changeName);
document.getElementById("hayButton").addEventListener("click", changePhoto);
document.getElementById("hayButton").addEventListener("click", changeBio);

//event listeners for my button
document.getElementById("simButton").addEventListener("click", changeName2);
document.getElementById("simButton").addEventListener("click", changePhoto2);
document.getElementById("simButton").addEventListener("click", changeBio2);

})();