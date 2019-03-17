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
	simText = ["Hello, my name is Simon Fuller and I am 29 years old. Welcome to the webpage, I hope you enjoy what you see. There are too many interesting subjects that I could bleed my heart out over, so I will only focus on the most important. Music drives my life. If you enjoy any style of electonic music, we can probably be friends. From the deep dark depths of techno to the emotional drones of ambient, there is an aspect of every genre that I have an attraction to. That being said, dancing and enjoying the nightlife go hand in hand with electronic music. Late nights are my strong suit. Dancing to music is a celebration of life and there is no beter place than to be safely enjoying music surrounded by your closest friends. The community is a positive, loving place that breeds happiness and resepct. There is love for those that started the movement just as much as the ones that are carrying it forward as we speak. Art has also been a part of my life since I was very young. I spent many of my young years doodling and drawing. My imagination is one of my strongest assets and never stops. My day dreams are just as wild as my night dreams. What I am always looking for is a new experience. Art creates the bridge between reality and the dreamworld. Wether it be drawing, photography, filmography or any of the other branches, each one has a place in my heart.  To be inspired and feel confident in following your own imagination is a gift within itself.  What really makes me happy is to be able to share my dreams with people so as to give them a beautiful moment just the same as the many artists have given me.  Giving back is the most incredible feeling that can not be explained with words."],
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