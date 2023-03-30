// Change the visibility of the requested element 
function changeVisibility(divID){
	var element = document.getElementById(divID);
	
	/*if element exists, toggle its class 
	 between hidden and unhidden */
	if(element){
        console.log('clicked')
		element.style.display = ((element.style.display!='block') ? 'block' : 'none')
	}//if
	
}// changeVisibility