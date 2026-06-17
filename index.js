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
})

if (17>new Date().getHours()>=12){

    document.getElementById('goodME').innerHTML="Good Afternoon";
}
else if(new Date().getHours()>=17){
    document.getElementById('goodME').innerHTML="Good Evening";

}

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
        day = "Thirstyday";
        break;
    case 5:
        day = "Friday Movie Night!";
        break;
    case 6:
        day = "Sadderday";
}
document.getElementById('weekME').innerHTML=""+day;


