//header buttonsssss
const closeBtn = document.querySelector(".closeButt");
const dropdownBtn = document.querySelector(".dropdown-btn");
const header = document.querySelector("header");

closeBtn.addEventListener("click", ()=> {
    header.style.top = "-95px";
    dropdownBtn.style.display = "block";
});

dropdownBtn.addEventListener("click", ()=> {
    header.style.top = "0";
    dropdownBtn.style.display = "none";
});
//music buttons
const closeMu = document.querySelector(".closeAss");
const openMu = document.querySelector(".openAss");
const musicbby = document.querySelector("#musicBby");


closeMu.addEventListener("click", ()=> {
    musicbby.style.left = "-290px";
    openMu.style.display = "block";
});
openMu.addEventListener("click", ()=>{
    musicbby.style.left = "0";
    openMu.style.display = "none";

});

//Hourssssss
if(new Date().getHours()>0){
    document.getElementById('goodME').innerHTML="Good Morning!";
}

if (new Date().getHours()>=12){

    document.getElementById('goodME').innerHTML="Good Afternoon!";
}
if(new Date().getHours()>17){
    document.getElementById('goodME').innerHTML="Good Evening!";

}

//Calenderrrrrrr
let day;
let date = new Date().getDay();

switch(date){
    case 0:
        day = "Sunnyday";
        break;
    case 1:
        day = "Monday EUGH!"
        break;
    case 2:
        day = "Chewsday";
        break;
    case 3:
        day = "Wenesday";
        break;
    case 4:
        day = "Thirstyday Movies!";
        break;
    case 5:
        day = "Friday Self Care!";
        break;
    case 6:
        day = "Sadderday";
}
document.getElementById('weekME').innerHTML=""+day;
//


