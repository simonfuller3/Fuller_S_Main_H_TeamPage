# Team Studio/Portfolio Page
**Simon Fuller and Hayden Main**
Project Due Date: March 16th

## Project Description
*A portfolio type of site with sections for one another, almost like the first project of semester one wth biographies, but more in depth. What stuff does each person produce? How much stuff does each person produce on an annual basis? Why is that the type of work you're doing? Showcasing what We indivdually are about, really.*

## Project tools
- CSS
- HTML
- JavaScript
- Sublime Text
- GitHub

### JavaScript necessities
- We need to use 'getElementByID("divname").classList.add("style")'
- We will need to toggle between classes on (preferably) an image/button basis. 
-We will need an If statement to switch between array items
-We will need multiple functions to ensure all infortmation is changed at a more reliable, easy to follow manner. 
-Functions will be doubled due to being triggered by separate buttons

#### Mapout
- Variable declaration for the image container
- Array declaration for Title changes, commas between vars. Will need to select the current title id as well.
- Create the array for the biographic info using var and commas between the declarations. 
-  Declare profile photo variable and hook into the image tag with a doc selector
- Change image function will need to have a para.innerHTML to remove the current bio, and then a += to get the next set in. We will need to put an if atatement in to remove any image in the current placeholder, and change the image source in that statement. We will need an else for if the container is full. This will need to be done twice, as there are two separate buttons.
- Create change title function. We will need to use parent and child node controls to navigate our if statements, which should empty the title content and append the next title. This will need to be done twice, as there are two separate buttons.
- Create background swapping function, just using classList.add/remove and if statements. This will need to be done twice, as there are two separate buttons.
- Create event listeners for each function, click based. Each one ending with one should correlate to the right button, while the others should correlate to the other. 