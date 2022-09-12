
function getImage(){
    // get the element we want to change
    var picSpot = document.getElementById("coolphoto");
    console.log(picSpot);
    picSpot.innerHTML="<img src ='OIP copy.jpg'/>";
}
function hideImage(){
    // get the element we want to change
    var picSpot = document.getElementById("coolphoto");
    console.log(picSpot);
    picSpot.innerHTML="";
}