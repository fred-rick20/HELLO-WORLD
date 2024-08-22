// const element = document.getElementById(container)

// const listfile= document.getElementById("listfive");
// console.log(listfile)

// let list= document.getElementsByClassName("list")
// console.log(list)

// let li =document.getElementsByTagName("li")
// console.log(li)
// //general
// const listTwo=document.querySelector(".listTwo");
// const listThree=document.querySelector(".listThree");
// console.log(listTwo, listThree);


// const allListClass=document.querySelectorAll(".list");
// console.log(allListClass);

// console.log(listfile.textContent)
// // using style property
// listfile.style.color="red";
// //using csstext prperty
// list[0].style.cssText="color:blue";

// //using setAttribute
// list[2].setAttribute("style","color:green");




// const sixLi=document.createElement("li");
// sixLi.textContent="six";
// sixLi.style.cssText="color: yellow;";

// document.getElementById("lists").appendChild(sixLi);

// //event handling
// const btn=document.getElementById("btn");

// function handleClick(){
//     console.log("this buttton was clicked");
//     window.location.href="../html/box_model"
// }
// //using addEVentListener
// btn.addEventListener("click", handleClick);
// //using on event
// btn.onclick=handleClick;

function changeText(){
    document.getElementById("message").textContent="button clicked";
}
function removeAd(){
    const adElement= document.querySelector(".ad-banner");
    if (adElement){
        adElement.remove
    }
}

