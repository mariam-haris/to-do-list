var i = 0;
var inputValue = document.querySelector(".input");
var btn = document.querySelector("#my-btn");
var reviewValue = document.querySelector(".review-parent");
var holdValue=document.querySelector(".hold-parent")
var approvesValue = document.querySelector(".approves-parent")
var progressValue =document.querySelector(".parent")
document.getElementById("my-btn").addEventListener("click", function (e) {
    e.preventDefault();
    var item = document.querySelector("input").value;
    console.log(item)
    var putIntoProgress = document.querySelector(".parent")
    var li = document.createElement("li");
    putIntoProgress.appendChild(li);
    li.innerHTML = item;
    li.setAttribute("id", `parag ${i++}`);
    li.setAttribute("class", "pink-color")
    console.log(li)
    inputValue.value = ""
    li.setAttribute('draggable', 'true');
    li.setAttribute("ondragover", "stopProp(event)")
    li.addEventListener("dragstart", function (ev) {
        console.log('start')
        // ev.preventDefault();
        console.log(ev.target.id)
        ev.dataTransfer.setData("text", ev.target.id);
    });
    li.addEventListener("dragend", function (ev) {
        console.log('end')
        li.className = "pink-color";
    });
});
reviewValue.addEventListener("dragover", function (ev) {
    ev.preventDefault();
});
reviewValue.addEventListener("drop", function (ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
});
holdValue.addEventListener("dragover", function (ev) {
    ev.preventDefault();
});
holdValue.addEventListener("drop", function (ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
});
approvesValue.addEventListener("dragover", function (ev) {
    ev.preventDefault();
});
approvesValue.addEventListener("drop", function (ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
});
progressValue.addEventListener("dragover", function (ev) {
    ev.preventDefault();
});
progressValue.addEventListener("drop", function (ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
});
function stopProp(e) {
    e.stopPropagation()
}
