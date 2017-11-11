//Select the modal element
var modal = document.getElementById("simpleModal");
//Select the open modal button
var modalBtn = document.getElementById("modalBtn");
//Select the close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];


//Create event listener to open modal on click of modalBtn
modalBtn.addEventListener("click", openModal);

//Create event listener to close modal on click of closeBtn
closeBtn.addEventListener("click", closeModal);

//Create event listener to close modal when we click outside the modal window
window.addEventListener("click", windowOutsideClick);

//function to open modal
function openModal(){
    modal.style.display ='block';
}

//function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//function to close outside window click
function windowOutsideClick(e) {
    if(e.target == modal){
      modal.style.display = "none";
    }
    
}