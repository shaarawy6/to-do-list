const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");

const ul = document.querySelector("ul");

searchBox.addEventListener("click",function(){
    searchBox.placeholder = ""; //clear placeholder when clicked on input
}); 

searchBtn.addEventListener("click",function(){
    searchBox.placeholder = "Enter Your Tasks"; //return placeholder again

    if(searchBox.value == ""){
        alert("No tasks Entered!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = searchBox.value;
        ul.appendChild(li); 
        searchBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
    }
    setData();
});

document.body.addEventListener("keydown",function(evt){
    searchBox.placeholder = "Enter Your Tasks"; //return placeholder again

    if(evt.key === "Enter"){
        if(searchBox.value == ""){
            alert("No tasks Entered!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = searchBox.value;
            ul.appendChild(li); 
            searchBox.value = "";
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; 
            li.appendChild(span); 
        }
        setData();
    }
});

ul.addEventListener("click",function(evt){
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("clicked");
        setData();
    }
    else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
        setData();
    }
});

function setData(){
    window.localStorage.setItem("data",ul.innerHTML);
}

function getData(){
    ul.innerHTML = localStorage.getItem("data");
}

getData();