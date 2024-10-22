function updateTime() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    timestampElement.value = dateString + " " + timeString;
}
setInterval(updateTime, 1000);
updateTime();

window.onload = function(){
    let comment = JSON.parse(localStorage.getItem("comment")) || [];
    displayComment(comment);
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
document.getElementById("com-1").style.display = 'block';
});
let btn2 = document.getElementById("btn-34");
btn2.addEventListener("click", function(e){
e.preventDefault();
addComment();
})
function addComment() {
let name = document.getElementById("username").value;
let desc = document.getElementById("comment").value;
let rating = document.getElementById("rating").value;
let timestamp = document.getElementById("timestamp").value;
let email = document.getElementById("Email").value;
if(name==""||desc==""||rating==""||email==""){
    alert("Enter all the details");
}
let comments = { timestamp: timestamp, name: name, desc: desc, rating: rating };
let comment = JSON.parse(localStorage.getItem("comment")) || [];
comment.push(comments);
localStorage.setItem('comment', JSON.stringify(comment));
displayComment(comment);
alert("Comment added sucessfully!!");
name.value = "";
desc.value = "";
rating.value = "";
}
function displayComment(comment){
let commentList = document.getElementById("hiddenComments");
commentList.innerHTML = "";

comment.forEach((com) =>{
    let commentcard = `
<div class="row m-auto border-3 d-flex align-items-center justify-content center p-3 w-50">
    <div class="col-md-4"><img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="profile_img" class="img-fluid rounded-circle"></div>
    <div class="col-md-8">
        <p class="text-end">${com.timestamp}</p>
        <p>${com.desc}</p>
        <p>${com.name}</p>
        <p class="text-end">${com.rating} stars</p>
        <p class="text-end"><i class="bi bi-heart"></i></p>
    </div>
    </div>
    `;
    commentList.innerHTML += commentcard;
}) 

};