"use strict"
const rightContent = document.querySelector(".right-content");
const arrowContainer = document.querySelectorAll(".arrow-container");
const rightContentTitle = document.querySelectorAll(".right-content_title");
const arrow = document.querySelectorAll(".arrow");
const rightContentText = document.querySelectorAll(".right-content_text");

rightContent.addEventListener("mouseup", event => {
    // I set an event on the link if the H4 class or the arrow is clicked
    if(event.target.parentNode.classList[2] != "active" && event.target.className == "right-content_title" || event.target.className == "arrow"){
        // I add the delete class to the parent element
        event.target.parentNode.classList.add("delete");
        event.target.parentNode.classList.add("active");
        // I run through the parent elements and the delete class here and style it relentlessly
        for(let i = 0; i < arrowContainer.length; i++){ 
            if(arrowContainer[i].classList[2] == "delete"){
                rightContentTitle[i].style.fontWeight = "700";
                arrow[i].style.transform = "rotateX(180deg)";
                rightContentText[i].style.display = "block";
            }
        }
        event.target.parentNode.classList.remove("delete");
    }
})
rightContent.addEventListener("mousedown", event =>{
    if(event.target.parentNode.classList[2] == "active"){
        for(let i = 0; i < arrowContainer.length; i++){
            if(event.target.parentNode.classList[1] == arrowContainer[i].classList[1]){
                rightContentTitle[i].style.fontWeight = "400";
                arrow[i].style.transform = "rotateX(0deg)";
                rightContentText[i].style.display = "none";
            }
        }
    }
    event.target.parentNode.classList.remove("active");
})
